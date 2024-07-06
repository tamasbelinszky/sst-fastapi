from typing import Annotated

from mangum import Mangum
from fastapi import FastAPI, Body

from pydantic import BaseModel, EmailStr


app = FastAPI(
    title="FastAPI - Deployed with SST",
    description="An example FastAPI app deployed with SST v2, demonstrating two key features: request/response validation and OpenAPI schema definitions. ",
    version="1.0.0",
)


@app.get("/")
def hello_world():
    return {"message": "hello world"}


class ExampleBody(BaseModel):
    full_name: str
    email: EmailStr


class ExampleResponse(BaseModel):
    message: str
    email: EmailStr


@app.post("/", response_model=ExampleResponse)
def create_user(body: Annotated[ExampleBody, Body()]):
    return ExampleResponse(message="User created", email=body.email)


handler = Mangum(app, lifespan="off")
