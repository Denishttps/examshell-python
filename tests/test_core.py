import os
import tempfile
import unittest

from pydantic import ValidationError

from examshell.models import Example
from examshell.task_generator import TaskManager, find_forbidden_usages, get_tasks


class ExampleValidationTests(unittest.TestCase):
    def test_accepts_named_call_with_literal_arguments(self) -> None:
        example = Example(input="solve([1, 2], option=True)", output="None")

        self.assertEqual(example.input, "solve([1, 2], option=True)")

    def test_rejects_executable_expression(self) -> None:
        with self.assertRaises(ValidationError):
            Example(input="__import__('os').system('whoami')", output="None")


class ForbiddenUsageTests(unittest.TestCase):
    def test_forbidden_method_matches_variable_name(self) -> None:
        self.assertEqual(
            find_forbidden_usages("items.sort()\n", [".sort()"]),
            [(".sort()", 1)],
        )


class ScoringTests(unittest.TestCase):
    def test_final_level_reaches_passing_score_for_every_rank(self) -> None:
        original_directory = os.getcwd()
        with tempfile.TemporaryDirectory() as directory:
            os.chdir(directory)
            try:
                for rank in (3, 4, 5):
                    manager = TaskManager(real_mode=False, rank=rank)
                    for level in range(1, manager.level_count + 1):
                        manager.current_level = level
                        manager.complete_current_level()

                    self.assertEqual(manager.points, 100)
            finally:
                os.chdir(original_directory)

    def test_bundled_examples_are_safe_calls(self) -> None:
        for rank in (3, 4, 5):
            for task in get_tasks(f"rank{rank}.json"):
                self.assertTrue(task.examples)

    def test_bundled_descriptions_are_not_mojibake(self) -> None:
        for rank in (3, 4, 5):
            for task in get_tasks(f"rank{rank}.json"):
                for description in task.description.model_dump().values():
                    self.assertNotIn("Ã", description)
                    self.assertNotIn("Ð", description)
