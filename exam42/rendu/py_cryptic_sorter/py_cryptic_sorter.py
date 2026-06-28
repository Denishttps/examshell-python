def cryptic_sorter(strings: list[str]) -> list[str]:
    vowels = set("aeiouAEIOU")

    def lexical_key(s: str):
        return tuple(
            c.lower() if c.isalpha() else c
            for c in s
        )

    return sorted(
        strings,
        key=lambda s: (
            len(s),
            lexical_key(s),
            sum(c in vowels for c in s)
        )
    )
