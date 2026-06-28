import os


data = None


with open("data.json", "r", encoding="utf-8") as f:
    import json
    data = json.load(f)


code = """

data = {}


"""


for d in data:
    with open("src/tasks/" + d["file"], "w") as f:

        f.write(code.format(d))