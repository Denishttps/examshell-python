

from models import Task
from task_generator import TaskManager


def choose_mode(attemp: int = 10) -> bool:
    if attemp <= 0:
        raise ValueError(
            "Bro, you're stupid!\nPlease WRITE 1 or 2"
        )

    mode = input(
        "Choose a Exam mode:\nReal mode: 1\nPractice mode: 2\nYour answer: "
    )

    if mode == "1" or mode == "2":
        return bool(int(mode) - 1)
    else:
        return choose_mode(attemp=attemp - 1)


def help_real_mode(manager: TaskManager, task: Task):
    upld_path = manager.path / "rendu" / task.name / task.file
    print(
            f"\n\nYour points: {manager.points}",
            f"Next task is: {task.name}",
            f"Upload the answer to the folder: {upld_path}",
            "Commands: ",
            "grademe - check the answer",
            "finish - finish the exam",
            "status - give this message",
            sep="\n"
        )


def grademe(manager: TaskManager, task: Task) -> None:
    check = manager.check_task()
    if check:
        manager.points += 16
        manager.current_level += 1
        if manager.points >= 100:
            print(
                "You passed the exam, congratulations.",
                manager.points + "/100"
            )
            exit()
        print(f"Task passed +16 points: {manager.points}/100")
        return manager.get_next_task()
    else:
        print("Failed. You can retry")
        return task
        


def real_mode():
    print("Welcome to exam: ")
    manager = TaskManager()
    task = manager.get_next_task()
    manager.create_task_files()
    while True:
        help_real_mode(manager=manager, task=task)
        user_input = input(": ")

        match user_input:
            case "status":
                help_real_mode(manager, task)
            case "grademe":
                task = grademe(manager, task)
            case "finish":
                exit()


def practice_mode():
    pass


def main():
    mode = choose_mode()
    print(mode)
    if mode:
        print(123)
        real_mode()
    else:
        practice_mode()
        
main()