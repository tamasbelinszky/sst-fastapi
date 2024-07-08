from pydantic import BaseModel, EmailStr


class User(BaseModel):
    full_name: str
    email: EmailStr
