from app.core.models import User
from pydantic import BaseModel


class ResponseJsonModel(BaseModel):
    json_obj: User


def handler(_event, _context):
    user = User(full_name="John Doe", email="john.doe@example.com")
    response = ResponseJsonModel(json_obj=user)

    return {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json"},
        "body": response.model_dump_json(),
    }
