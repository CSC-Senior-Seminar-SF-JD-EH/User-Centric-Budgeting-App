import sqlalchemy
from sqlalchemy import Column, Integer, String, JSON, Float
from database import Base

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    firstName = Column(String(50), nullable=False)
    lastName = Column(String(50), nullable=False)
    email = Column(String(100), nullable=False, unique=True)
    password = Column(String(100), nullable=False)
    budget = Column(JSON)
    balance = Column(float(50))
    transactions = Column(String)




