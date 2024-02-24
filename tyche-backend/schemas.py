from pydantic import BaseModel, Json

class UserCreate(BaseModel):
    firstName: str
    lastName: str
    email: str
    password: str
    budget: Json
    balance: str
    transactions: str
