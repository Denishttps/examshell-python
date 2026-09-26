from pydantic import BaseModel, Field


class Description(BaseModel):
    en: str
    de: str
    fr: str
    es: str
    it: str


class Example(BaseModel):
    input: str
    output: str


class Task(BaseModel):
    id: int
    level: int
    difficulty: str
    name: str
    file: str
    description: Description
    signature: str
    examples: list[Example]
    forbidden: list[str] = Field(default_factory=list)
