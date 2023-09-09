from typing import List

from fastapi import FastAPI

from pydantic import BaseModel

app = FastAPI()

class Person(BaseModel):
    id: int
    name: str
    age: int

DB: List[Person] = [
    Person(id=1, name="Priyanka", age=22),
    Person(id=2, name="sagar", age=23),
]

@app.get("/api")
def read_root():
    return DB


