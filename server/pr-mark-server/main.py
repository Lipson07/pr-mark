from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from typing import Annotated, List
import bcrypt  # Import bcrypt
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


DATABASE_URL = "sqlite:///./test.db"  # SQLite database URL

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

class User(Base):
    __tablename__ = "users"  # Specify the table name explicitly

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

class PasswordChange(BaseModel):
    phone_number: str
    old_password: str
    new_password: str

def hash_password(password: str):
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    return hashed_password.decode('utf-8')

def verify_password(password: str, hashed_password: str):
    return bcrypt.checkpw(password.encode('utf-8'), hashed_password.encode('utf-8'))

app = FastAPI()

origins = [
       "http://localhost:3000",
       "http://localhost:8000/vhod",
       "http://localhost:8000" #Убрать /vhod, если оно не нужно
       "http://localhost:8001",
        "http://localhost:8000",
        "http://localhost",
        "http://127.0.0.1"
        "http://127.0.0.1:8000"  # Доступ из Swagger UI (возможно)
   ]
   

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.post("/register/", response_model=UserResponse)
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

@app.post("/login/", response_model=UserResponse)
async def login_user(user: UserLogin, db: db_dependency):
    logger.info(f"Attempting login for user: phone_number={user.phone_number}")
    db_user = db.query(User).filter(User.phone_number == user.phone_number).first()
    if not db_user:
        logger.warning(f"User with phone number {user.phone_number} not found")
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Invalid phone number or password")

    if not verify_password(user.password, db_user.password):
        logger.warning(f"Incorrect password for user: phone_number={user.phone_number}")
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid phone number or password")

    logger.info(f"User {user.phone_number} successfully logged in")
    return UserResponse.from_orm(db_user) # Return the UserResponse model

@app.delete("/users/{user_id}/", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(user_id: int, db: db_dependency):
    logger.info(f"Deleting user with id={user_id}")
    db_user = db.query(User).filter(User.id == user_id).first()
    if not db_user:
        logger.warning(f"User with id {user_id} not found")
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

    db.delete(db_user)
    db.commit()
    logger.info(f"User with id {user_id} successfully deleted")
    return None # Return None for 204 No Content


@app.get("/users/count/", response_model=int)
async def get_user_count(db: db_dependency):
    count = db.query(User).count()
    logger.info(f"Total user count: {count}")
    return count

@app.get("/users/", response_model=List[UserResponse])
async def list_users(db: db_dependency):
    logger.info("Attempting to retrieve list of users")
    try:
        users = db.query(User).all()  # Закомментируйте это
            #user_responses = [UserResponse.from_orm(user) for user in users] # Закомментируйте это
            #return user_responses  # Закомментируйте это
        return users  # Верните пустой список
    except Exception as e:
        logger.error(f"An error occurred while retrieving users: {e}", exc_info=True)
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to retrieve users")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
