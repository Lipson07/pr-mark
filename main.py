from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from pydantic import BaseModel, validator
from typing import Annotated, List, Optional
import bcrypt

# Database Configuration
DATABASE_URL = "sqlite:///./users.db"  # SQLite database file

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Define the User model
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=True)  # Allow NULL values in the database
    phone_number = Column(String, unique=True, index=True)
    password = Column(String)

# Create the database tables
Base.metadata.create_all(bind=engine)

# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]


class UserCreate(BaseModel):
    name: Optional[str] = None  # Make name optional
    phone_number: str
    password: str


class UserResponse(BaseModel):
    id: int
    name: Optional[str]
    phone_number: str
    class Config: 
        orm_mode = True 
        from_attributes = True  


class PasswordChange(BaseModel):
    phone_number: str
    old_password: str
    new_password: str

class UserNameUpdate(BaseModel):
    user_id: int
    new_name: str

def hash_password(password: str):
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    return hashed_password.decode('utf-8')

def verify_password(password: str, hashed_password: str):
    return bcrypt.checkpw(password.encode('utf-8'), hashed_password.encode('utf-8'))


# FastAPI application
app = FastAPI()

# Registration endpoint (POST)
@app.post("/register/", response_model=UserResponse)
async def register_user(user: UserCreate, db: db_dependency):
    db_user = db.query(User).filter(User.phone_number == user.phone_number).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Phone number already registered")

    hashed_password = hash_password(user.password)
    db_user = User(name=user.name, phone_number=user.phone_number, password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# Get user by ID endpoint (GET)
@app.get("/users/{user_id}", response_model=UserResponse)
async def get_user(user_id: int, db: db_dependency):
    user = db.query(User).filter(User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user

# Get all users (GET)
@app.get("/users/", response_model=List[UserResponse])
async def get_all_users(db: db_dependency):
    users = db.query(User).all()
    return users

@app.put("/change_password/")
async def change_password(password_change: PasswordChange, db: db_dependency):
    user = db.query(User).filter(User.phone_number == password_change.phone_number).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    if not verify_password(password_change.old_password, user.password):
        raise HTTPException(status_code=400, detail="Incorrect old password")

    hashed_password = hash_password(password_change.new_password)
    user.password = hashed_password
    db.commit()
    return {"message": "Password changed successfully"}

# Delete User Endpoint (DELETE)
@app.delete("/users/{user_id}")
async def delete_user(user_id: int, db: db_dependency):
    user = db.query(User).filter(User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    db.delete(user)
    db.commit()
    return {"message": "User deleted successfully"}

@app.put("/users/update_name/")
async def update_user_name(name_update: UserNameUpdate, db: db_dependency):
    user = db.query(User).filter(User.id == name_update.user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    user.name = name_update.new_name
    db.commit()
    db.refresh(user)
    return UserResponse.from_orm(user)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)