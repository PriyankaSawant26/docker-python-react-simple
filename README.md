# docker-python-react-simple
Building Simple Full Stack Applications With Python and ReactJS

Using FastAPI  https://fastapi.tiangolo.com/

Install pip install fastapi
        pip install "uvicorn[standard]"

Create a File main.py
Run the server with: uvicorn main:app --reload

Create a React folder
Install : npx create-react-app frontend
Install axios 

Create Docker file for Backend with Requirements
Create Requirement : pip freeze > requirements.txt

To Build Docker Image Backend:
docker build . -t backend

To Build Docker Image Frontend:
    docker build . -t frontend

To connect to frontend with backend docker conatiner to communicate with each othet

Create Docker Network
    docker network create foobar

To Run Docker Backend
    docker run --name backend --rm --netwrok foobar -p 8000:8000 backend

To Run Docker frontend
    docker run --name --rm frontend --netwrok foobar -p 3000 : 3000 frontend
