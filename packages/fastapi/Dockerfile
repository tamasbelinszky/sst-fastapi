FROM python:3.10

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --platform manylinux2014_x86_64 --implementation cp --python-version 3.10 --only-binary=:all: --upgrade -r /code/requirements.txt

COPY ./app.py /code/

# Use the virtual environment to run the FastAPI app
CMD ["/code/venv/bin/fastapi", "run", "app.py", "--port", "80", "--proxy-headers"]
