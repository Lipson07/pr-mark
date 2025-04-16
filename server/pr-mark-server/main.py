from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from typing import Annotated, List
import bcrypt
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    phone_number = Column(String, unique=True, index=True)
    password = Column(String)

Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

class UserCreate(BaseModel):
    phone_number: str
    password: str

class UserLogin(BaseModel):
    phone_number: str
    password: str

class UserResponse(BaseModel):
    id: int
    phone_number: str

    class Config:
        orm_mode = True

def hash_password(password: str):
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    return hashed_password.decode('utf-8')

def verify_password(password: str, hashed_password: str):
    return bcrypt.checkpw(password.encode('utf-8'), hashed_password.encode('utf-8'))

app = FastAPI()

origins = [
    "http://localhost:3000/smena",
    "http://localhost:3000/vhod",
    "http://localhost:3000/regestr",
    "http://localhost:3000",
    "http://localhost",
    "http://127.0.0.1:3000",
    "http://127.0.0.1",
    "*",  # ВНИМАНИЕ: Не использовать в продакшене
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/login", response_model=UserResponse)
async def login(user: UserLogin, db: db_dependency):
    logger.info(f"Login attempt for phone number: {user.phone_number}")
    
    # Ищем пользователя в базе данных
    db_user = db.query(User).filter(User.phone_number == user.phone_number).first()
    if not db_user:
        logger.warning(f"User with phone number {user.phone_number} not found")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect phone number or password"
        )
    
    # Проверяем пароль
    if not verify_password(user.password, db_user.password):
        logger.warning(f"Invalid password for user {user.phone_number}")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect phone number or password"
        )
    
    logger.info(f"User {user.phone_number} successfully authenticated")
    return db_user

# Остальные эндпоинты остаются без изменений
@app.post("/register", response_model=UserResponse)
async def register_user(user: UserCreate, db: db_dependency):
    logger.info(f"Registering user: phone_number={user.phone_number}")
    db_user = db.query(User).filter(User.phone_number == user.phone_number).first()
    if db_user:
        logger.warning(f"Phone number {user.phone_number} already registered")
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Phone number already registered")

    hashed_password = hash_password(user.password)
    db_user = User(phone_number=user.phone_number, password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    logger.info(f"User {user.phone_number} successfully registered with id={db_user.id}")
    return db_user

@app.delete("/users/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(user_id: int, db: db_dependency):
    logger.info(f"Deleting user with id={user_id}")
    db_user = db.query(User).filter(User.id == user_id).first()
    if not db_user:
        logger.warning(f"User with id {user_id} not found")
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

    db.delete(db_user)
    db.commit()
    logger.info(f"User with id {user_id} successfully deleted")
    return None

@app.get("/users/count", response_model=int)
async def get_user_count(db: db_dependency):
    count = db.query(User).count()
    logger.info(f"Total user count: {count}")
    return count

@app.get("/users", response_model=List[UserResponse])
async def list_users(db: db_dependency):
    logger.info("Attempting to retrieve list of users")
    try:
        users = db.query(User).all()
        return users
    except Exception as e:
        logger.error(f"An error occurred while retrieving users: {e}", exc_info=True)
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to retrieve users")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)