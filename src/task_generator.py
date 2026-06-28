import ast
import json

import random
from models import Task

from pydantic import TypeAdapter

from pathlib import Path

import importlib.util


def get_tasks() -> list[Task]:
    adapter = TypeAdapter(list[Task])
    with open("data.json", "r", encoding="utf-8") as f:
        return adapter.validate_python(json.load(f))


class TaskManager:
    def __init__(self, real_mode: bool = True):
        self.data = sorted(get_tasks(), key=lambda a: a.level)
        self.real_mode = real_mode
        self.points = 0
        self.current_level = 1
        self.current_task: int | None = None
        self.path = self._create_folder()

    def _create_folder(self, path_str: str = "exam42") -> Path:
        path = Path(f"./{path_str}")
        if path.exists():
            return self._create_folder(
                path_str + "-" + str(random.randint(100000, 10000000))
            )
        path.mkdir(parents=True)
        (path / "subjects").mkdir(parents=True)
        (path / "rendu").mkdir(parents=True)
        return path

    def get_next_task(self) -> Task:
        if self.real_mode:
            return self._get_task_by_real_mode()
        else:
            return self._get_next_task()

    def get_data_by_level(self, level) -> list[Task]:
        data = []
        for d in self.data:
            if d.level == level:
                data.append(d)
        return data

    def get_task_by_id(self, id) -> Task | None:
        for t in self.data:
            if t.id == id:
                return t

    def _get_task_by_real_mode(self) -> Task | None:
        data = self.get_data_by_level(self.current_level)
        task = random.choice(data)
        self.current_task = task.id
        return task

    def _get_next_task(self) -> Task:
        if not self.current_task:
            self.current_task = self.data[0].id
            return self.data[0]

        task = self.get_task_by_id(self.current_task)
        next_task_index = self.data.index(task) + 1

        if next_task_index < len(self.data):
            next_task = self.data[next_task_index]
            self.current_task = next_task.id
            return next_task

        return None

    def create_task_files(self):
        task = self.get_task_by_id(self.current_task)
        if not task:
            return

        text_examples = "\n\n"
        for e in task.examples:
            text_examples += e.input + "\n"
            text_examples += e.output + "\n\n"

        for lang, text in task.description.model_dump().items():
            file_name = f"{task.name}.{lang}.txt"
            file_path = self.path / "subjects" / file_name

            with open(file_path, "w", encoding="utf-8") as f:
                f.write(
                    text + "\n\n" + task.signature + text_examples
                )

    def check_task(self) -> bool:
        task = self.get_task_by_id(self.current_task)

        file_path = self.path / "rendu" / task.name / task.file

        if not file_path.is_file():
            return False

        module_name = task.file[:-3]

        try:
            spec = importlib.util.spec_from_file_location(
                module_name, file_path
            )
            module = importlib.util.module_from_spec(spec)
            spec.loader.exec_module(module)
        except Exception:
            return False

        try:
            for i in task.examples:
                result = eval(i.input, vars(module))
                expected_result = ast.literal_eval(i.output)

                if result != expected_result:
                    return False
        except Exception:
            return False

        return True
