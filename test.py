

def bracket_validator(s: str) -> bool:
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}

    for c in s:
        if c not in "[]{}()":
            continue

        if c in '([{':
            stack.append(c)
        elif not stack or stack.pop() != pairs[c]:
            return False

    return not stack

