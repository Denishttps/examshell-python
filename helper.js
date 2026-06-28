
var SUBJECTS = [
  {
    id: 1,
    level: 1,
    difficulty: "easy",
    name: "py_bracket_validator",
    file: "py_bracket_validator.py",
    description: {
      en: "Write a function that checks if the brackets in a string are valid.\nA string is valid if every opening bracket has a matching closing bracket\nin the correct order.\nAllowed brackets: (), [], {}",
      de: "Schreibe eine Funktion, die prГјft, ob Klammern in einem String korrekt gepaart und geschachtelt sind.\nUnterstГјtze drei Arten: (), [], {}.\n\nDie Funktion soll:\n- True zurГјckgeben, wenn alle Klammern korrekt gepaart sind\n- True fГјr Strings ohne Klammern zurГјckgeben\n- False bei nicht passenden oder falsch geschachtelten Klammern zurГјckgeben\n- Zeichen auГџerhalb von Klammern ignorieren",
      fr: "Г‰cris une fonction qui vГ©rifie si les parenthГЁses dвЂ™une chaГ®ne sont correctement appariГ©es et imbriquГ©es.\nPrends en charge trois types : (), [], {}.\n\nLa fonction doit :\n- Retourner True si toutes les parenthГЁses sont correctement appariГ©es\n- Retourner True pour les chaГ®nes sans aucune parenthГЁse\n- Retourner False si elles ne correspondent pas ou sont mal imbriquГ©es\n- Ignorer les caractГЁres qui ne sont pas des parenthГЁses",
      es: "Escribe una funciГіn que compruebe si los parГ©ntesis de una cadena estГЎn bien emparejados y anidados.\nAdmite tres tipos: (), [], {}.\n\nLa funciГіn debe:\n- Devolver True si todos los parГ©ntesis estГЎn bien emparejados\n- Devolver True si la cadena no tiene parГ©ntesis\n- Devolver False si faltan pares o el anidamiento es incorrecto\n- Ignorar caracteres que no sean parГ©ntesis",
      it: "Scrivi una funzione che verifichi se le parentesi in una stringa sono accoppiate e annidate correttamente.\nSupporta tre tipi: (), [], {}.\n\nLa funzione deve:\n- Restituire True se tutte le parentesi sono corrette\n- Restituire True per stringhe senza parentesi\n- Restituire False se mancano coppie o lвЂ™annidamento ГЁ errato\n- Ignorare i caratteri che non sono parentesi",
    },
    signature: "def bracket_validator(s: str) -> bool:",
    examples: [
        {
          "input": "bracket_validator(\"()\")",
          "output": "True"
        },
        {
          "input": "bracket_validator(\"()[]{}\")",
          "output": "True"
        },
        {
          "input": "bracket_validator(\"(]\")",
          "output": "False"
        },
        {
          "input": "bracket_validator(\"([)]\")",
          "output": "False"
        },
        {
          "input": "bracket_validator(\"{[]}\")",
          "output": "True"
        },
        {
          "input": "bracket_validator(\"hello(world)\")",
          "output": "True"
        },
        {
          "input": "bracket_validator(\"((())\")",
          "output": "False"
        },
        {
          "input": "bracket_validator(\"\")",
          "output": "True"
        }
      ],
  },
  {
    id: 2,
    level: 1,
    difficulty: "easy",
    name: "py_cryptic_sorter",
    file: "py_cryptic_sorter.py",
    description: {
      en: "Write a function that sorts a list of strings according to multiple criteria:\n1. Primary sort: By string length (shortest first)\n2. Secondary sort: ASCII order, except letters are compared case-insensitively\n   (for strings of same length)\n3. Tertiary sort: By number of vowels (ascending, for same length and lexically equal)\n4. Equal strings will appear in the same order as in the input list.",
      de: "Schreibe eine Funktion, die eine Liste von Strings mit dreistufiger PrioritГ¤t sortiert:\n1. PrimГ¤r: nach LГ¤nge (aufsteigend)\n2. SekundГ¤r: lexikographisch (alphabetisch, ohne GroГџ-/Kleinschreibung, aufsteigend)\n3. TertiГ¤r: nach Anzahl der Vokale (aufsteigend bei gleicher LГ¤nge und lexikalischer Gleichheit)\n\nDie Funktion muss:\n- Leere Strings und leere Listen verarbeiten\n- Gemischte GroГџ-/Kleinschreibung (fГјr Sortierung wie Kleinbuchstaben behandeln)\n- Sonderzeichen (fГјr VokalzГ¤hlung ignorieren)",
      fr: "Г‰cris une fonction qui trie une liste de chaГ®nes avec une prioritГ© Г  trois niveaux :\n1. Tri principal : par longueur (croissant)\n2. Tri secondaire : lexicographique (alphabГ©tique, insensible Г  la casse, croissant)\n3. Tri tertiaire : par nombre de voyelles (croissant, si longueur et ordre lexicographique Г©gaux)\n\nLa fonction doit gГ©rer :\n- ChaГ®nes vides et listes vides\n- Casses mixtes (traiter comme des minuscules pour le tri)\n- CaractГЁres spГ©ciaux (les ignorer pour compter les voyelles)",
      es: "Escribe una funciГіn que ordene una lista de cadenas con prioridad en tres niveles:\n1. Primario: por longitud (ascendente)\n2. Secundario: lexicogrГЎfico (alfabГ©tico, sin distinguir mayГєsculas, ascendente)\n3. Terciario: por nГєmero de vocales (ascendente si la longitud y el orden lГ©xico coinciden)\n\nLa funciГіn debe manejar:\n- Cadenas vacГ­as y listas vacГ­as\n- MayГєsculas y minГєsculas mezcladas (tratar como minГєsculas al ordenar)\n- Caracteres especiales (ignorarlos al contar vocales)",
      it: "Scrivi una funzione che ordini una lista di stringhe con prioritГ  a tre livelli:\n1. Primario: per lunghezza (crescente)\n2. Secondario: lessicografico (alfabetico, case-insensitive, crescente)\n3. Terziario: per numero di vocali (crescente a paritГ  di lunghezza e ordine lessicale)\n\nLa funzione deve gestire:\n- Stringhe vuote e liste vuote\n- Maiuscole e minuscole miste (per lвЂ™ordinamento trattare come minuscole)\n- Caratteri speciali (ignorarli nel conteggio delle vocali)",
    },
    signature: "def cryptic_sorter(strings: list[str]) -> list[str]:",
    examples: [
        {
          "input": "cryptic_sorter([\"apple\",\"cat\",\"banana\",\"dog\",\"elephant\"])",
          "output": "[\"cat\",\"dog\",\"apple\",\"banana\",\"elephant\"]"
        },
        {
          "input": "cryptic_sorter([\"aaa\",\"bbb\",\"AAA\",\"BBB\"])",
          "output": "[\"AAA\", \"aaa\", \"BBB\", \"bbb\"]"
        },
        {
          "input": "cryptic_sorter([\"hello\",\"world\",\"hi\",\"test\"])",
          "output": "[\"hi\",\"test\",\"hello\",\"world\"]"
        },
        {
          "input": "cryptic_sorter([])",
          "output": "[]"
        },
        {
          "input": "cryptic_sorter([\"\"])",
          "output": "[\"\"]"
        }
      ],
  },
  {
    id: 3,
    level: 2,
    difficulty: "easy",
    name: "py_echo_validator",
    file: "py_echo_validator.py",
    description: {
      en: "Write a function that checks if a string is a palindrome,\nignoring spaces and case, only consider alphabetic characters\nfor the comparison.",
      de: "Schreibe eine Funktion, die prГјft, ob ein String ein Palindrom ist - Leerzeichen und GroГџ-/Kleinschreibung ignorieren; nur alphabetische Zeichen fГјr den Vergleich berГјcksichtigen.",
      fr: "Г‰cris une fonction qui vГ©rifie si une chaГ®ne est un palindrome, en ignorant espaces et casse, et en ne considГ©rant que les caractГЁres alphabГ©tiques pour la comparaison.",
      es: "Escribe una funciГіn que compruebe si una cadena es un palГ­ndromo, ignorando espacios y mayГєsculas/minГєsculas, y considerando solo caracteres alfabГ©ticos en la comparaciГіn.",
      it: "Scrivi una funzione che verifichi se una stringa ГЁ palindroma, ignorando spazi e maiuscole/minuscole e considerando solo i caratteri alfabetici nel confronto.",
    },
    signature: "def echo_validator(text: str) -> bool:",
    examples: [
        {
          "input": "echo_validator(\"racecar\")",
          "output": "True"
        },
        {
          "input": "echo_validator(\"A man a plan a canal Panama\")",
          "output": "True"
        },
        {
          "input": "echo_validator(\"race a car\")",
          "output": "False"
        },
        {
          "input": "echo_validator(\"Was it a car or a cat I saw\")",
          "output": "True"
        },
        {
          "input": "echo_validator(\"hello\")",
          "output": "False"
        },
        {
          "input": "echo_validator(\"Madam Im Adam\")",
          "output": "True"
        },
        {
          "input": "echo_validator(\"\")",
          "output": "False"
        }
      ],
  },
  {
    id: 4,
    level: 2,
    difficulty: "easy",
    name: "py_mirror_matrix",
    file: "py_mirror_matrix.py",
    description: {
      en: "Given a 2D matrix (list of lists), return a new matrix where each row\nis reversed.",
      de: "Schreibe eine Funktion, die eine 2D-Matrix horizontal spiegelt, indem jede Zeile umgekehrt wird.\n\nDie Funktion soll:\n- Eine 2D-Liste (Matrix) aus ganzen Zahlen als Eingabe nehmen\n- Eine neue 2D-Liste zurГјckgeben, in der jede Zeile horizontal umgekehrt ist\n- Matrizen beliebiger GrГ¶Гџe (quadratisch oder rechteckig) verarbeiten\n- Die ursprГјngliche Zeilenreihenfolge beibehalten\n- Die ursprГјngliche Matrix nicht verГ¤ndern",
      fr: "Г‰cris une fonction qui miroite une matrice 2D horizontalement en inversant chaque ligne.\n\nLa fonction doit :\n- Prendre une liste 2D (matrice) dвЂ™entiers en entrГ©e\n- Retourner une nouvelle liste 2D oГ№ chaque ligne est inversГ©e horizontalement\n- GГ©rer des matrices de toute taille (carrГ©es ou rectangulaires)\n- Conserver lвЂ™ordre dвЂ™origine des lignes\n- Ne pas modifier la matrice dвЂ™origine",
      es: "Escribe una funciГіn que espeje una matriz 2D horizontalmente invirtiendo cada fila.\n\nLa funciГіn debe:\n- Recibir una lista 2D (matriz) de enteros\n- Devolver una nueva lista 2D donde cada fila estГ© invertida horizontalmente\n- Manejar matrices de cualquier tamaГ±o (cuadradas o rectangulares)\n- Conservar el orden original de las filas\n- No modificar la matriz original",
      it: "Scrivi una funzione che specchia una matrice 2D in orizzontale invertendo ogni riga.\n\nLa funzione deve:\n- Prendere in input una lista 2D (matrice) di interi\n- Restituire una nuova lista 2D in cui ogni riga ГЁ invertita orizzontalmente\n- Gestire matrici di qualsiasi dimensione (quadrate o rettangolari)\n- Preservare lвЂ™ordine originale delle righe\n- Non modificare la matrice originale",
    },
    signature: "def mirror_matrix(matrix: list[list[int]]) -> list[list[int]]:",
    examples: [
        {
          "input": "mirror_matrix([[1,2,3],[4,5,6]])",
          "output": "[[3,2,1],[6,5,4]]"
        },
        {
          "input": "mirror_matrix([[1,2],[3,4],[5,6]])",
          "output": "[[2,1],[4,3],[6,5]]"
        },
        {
          "input": "mirror_matrix([[7]])",
          "output": "[[7]]"
        },
        {
          "input": "mirror_matrix([[1,2,3,4]])",
          "output": "[[4,3,2,1]]"
        },
        {
          "input": "mirror_matrix([[-1,-2],[-3,-4]])",
          "output": "[[-2,-1],[-4,-3]]"
        }
      ],
  },
  {
    id: 5,
    level: 3,
    difficulty: "medium",
    name: "py_hidenp",
    file: "py_hidenp.py",
    description: {
      en: "Write a function that checks if the string 'small' is a subsequence\nof 'big'. A subsequence means all characters of 'small' appear in 'big'\nin the same order, but not necessarily consecutively.\nFunction is case-sensitive.",
      de: "Write a function that checks if the string 'small' is a subsequence\nof 'big'. A subsequence means all characters of 'small' appear in 'big'\nin the same order, but not necessarily consecutively.\nFunction is case-sensitive.",
      fr: "Write a function that checks if the string 'small' is a subsequence\nof 'big'. A subsequence means all characters of 'small' appear in 'big'\nin the same order, but not necessarily consecutively.\nFunction is case-sensitive.",
      es: "Write a function that checks if the string 'small' is a subsequence\nof 'big'. A subsequence means all characters of 'small' appear in 'big'\nin the same order, but not necessarily consecutively.\nFunction is case-sensitive.",
      it: "Write a function that checks if the string 'small' is a subsequence\nof 'big'. A subsequence means all characters of 'small' appear in 'big'\nin the same order, but not necessarily consecutively.\nFunction is case-sensitive.",
    },
    signature: "def hidenp(small: str, big: str) -> bool:",
    examples: [
        {
          "input": "hidenp(\"abc\", \"a1b2c3\")",
          "output": "True"
        },
        {
          "input": "hidenp(\"ace\", \"abcde\")",
          "output": "True"
        },
        {
          "input": "hidenp(\"aec\", \"abcde\")",
          "output": "False"
        },
        {
          "input": "hidenp(\"\", \"abc\")",
          "output": "True"
        },
        {
          "input": "hidenp(\"abc\", \"ab\")",
          "output": "False"
        },
        {
          "input": "hidenp(\"aaaa\", \"aaa\")",
          "output": "False"
        },
        {
          "input": "hidenp(\"sing\",\"subsequence testing\")",
          "output": "True"
        }
      ],
  },
  {
    id: 6,
    level: 3,
    difficulty: "medium",
    name: "py_inter",
    file: "py_inter.py",
    description: {
      en: "Write a function that returns a string with the characters that appear\nin both strings, without repetitions. Characters are added in the order\nthey appear in the first string.",
      de: "Write a function that returns a string with the characters that appear\nin both strings, without repetitions. Characters are added in the order\nthey appear in the first string.",
      fr: "Write a function that returns a string with the characters that appear\nin both strings, without repetitions. Characters are added in the order\nthey appear in the first string.",
      es: "Write a function that returns a string with the characters that appear\nin both strings, without repetitions. Characters are added in the order\nthey appear in the first string.",
      it: "Write a function that returns a string with the characters that appear\nin both strings, without repetitions. Characters are added in the order\nthey appear in the first string.",
    },
    signature: "def inter(s1: str, s2: str) -> str:",
    examples: [
        {
          "input": "inter(\"hello\", \"world\")",
          "output": "\"lo\""
        },
        {
          "input": "inter(\"banana\", \"band\")",
          "output": "\"ban\""
        },
        {
          "input": "inter(\"abcabc\", \"bc\")",
          "output": "\"bc\""
        },
        {
          "input": "inter(\"abc\", \"xyz\")",
          "output": "\"\""
        },
        {
          "input": "inter(\"\", \"abc\")",
          "output": "\"\""
        }
      ],
  },
  {
    id: 7,
    level: 3,
    difficulty: "medium",
    name: "py_number_base_converter",
    file: "py_number_base_converter.py",
    description: {
      en: "Write a function that converts a number from one base to another.\nSupport bases from 2 to 36 inclusive.\nUse digits 0-9 and letters A-Z for values 10-35.\nReturn \"ERROR\" for invalid inputs.",
      de: "Schreibe eine Funktion, die eine Zahl von einer Basis in eine andere konvertiert.\nUnterstГјtze Basen von 2 bis 36 einschlieГџlich, mit Ziffern 0-9 und Buchstaben A-Z fГјr die Werte 10-35. Gib bei ungГјltigen Eingaben (Basis, Ziffern) \"ERROR\" zurГјck.",
      fr: "Г‰cris une fonction qui convertit un nombre d'une base vers une autre.\nPrends en charge les bases de 2 Г  36 inclus, avec les chiffres 0-9 et les lettres A-Z pour les valeurs 10-35. Renvoie \"ERROR\" pour les entrГ©es invalides (base, chiffres).",
      es: "Escribe una funciГіn que convierta un nГєmero de una base a otra.\nAdmite bases de 2 a 36 inclusive, usando dГ­gitos 0-9 y letras A-Z para los valores 10-35. Devuelve \"ERROR\" si la entrada no es vГЎlida (base, dГ­gitos).",
      it: "Scrivi una funzione che converta un numero da una base a un'altra.\nSupporta basi da 2 a 36 inclusive, usando cifre 0-9 e lettere A-Z per i valori 10-35. Restituisci \"ERROR\" per input non validi (base, cifre).",
    },
    signature: "def number_base_converter(number: str, from_base: int, to_base: int) -> str:",
    examples: [
        {
          "input": "number_base_converter(\"1010\", 2, 10)",
          "output": "\"10\""
        },
        {
          "input": "number_base_converter(\"FF\", 16, 10)",
          "output": "\"255\""
        },
        {
          "input": "number_base_converter(\"255\", 10, 16)",
          "output": "\"FF\""
        },
        {
          "input": "number_base_converter(\"123\", 10, 2)",
          "output": "\"1111011\""
        },
        {
          "input": "number_base_converter(\"Z\", 36, 10)",
          "output": "\"35\""
        },
        {
          "input": "number_base_converter(\"35\", 10, 36)",
          "output": "\"Z\""
        },
        {
          "input": "number_base_converter(\"123\", 1, 10)",
          "output": "\"ERROR\""
        },
        {
          "input": "number_base_converter(\"G\", 16, 10)",
          "output": "\"ERROR\""
        }
      ],
  },
  {
    id: 8,
    level: 3,
    difficulty: "medium",
    name: "py_pattern_tracker",
    file: "py_pattern_tracker.py",
    description: {
      en: "Write a function that counts the number of valid consecutive digit pairs\nin a string. A valid pair consists of two adjacent digits where the second\ndigit is exactly one greater than the first.\nA 9 followed by a 0 is NOT a valid pair.",
      de: "Schreibe eine Funktion, die die Anzahl gГјltiger aufeinanderfolgender Ziffernpaare in einem String zГ¤hlt. Ein gГјltiges Paar besteht aus zwei benachbarten Ziffern, bei denen die zweite genau um eins grГ¶Гџer ist als die erste. Eine 9 gefolgt von 0 ist KEIN gГјltiges Paar.",
      fr: "Г‰cris une fonction qui compte le nombre de paires de chiffres consГ©cutifs valides dans une chaГ®ne. Une paire valide est formГ©e de deux chiffres adjacents dont le second vaut exactement un de plus que le premier. Un 9 suivi dвЂ™un 0 nвЂ™est PAS une paire valide.",
      es: "Escribe una funciГіn que cuente cuГЎntos pares consecutivos de dГ­gitos vГЎlidos hay en una cadena. Un par vГЎlido son dos dГ­gitos adyacentes donde el segundo es exactamente uno mayor que el primero. Un 9 seguido de 0 NO es un par vГЎlido.",
      it: "Scrivi una funzione che conti quante coppie consecutive di cifre valide ci sono in una stringa. Una coppia valida ГЁ formata da due cifre adiacenti in cui la seconda ГЁ esattamente uno piГ№ della prima. Un 9 seguito da 0 NON ГЁ una coppia valida.",
    },
    signature: "def pattern_tracker(text: str) -> int:",
    examples: [
        {
          "input": "pattern_tracker(\"123\")",
          "output": "2"
        },
        {
          "input": "pattern_tracker(\"12a34\")",
          "output": "2"
        },
        {
          "input": "pattern_tracker(\"987654321\")",
          "output": "0"
        },
        {
          "input": "pattern_tracker(\"01234567\")",
          "output": "7"
        },
        {
          "input": "pattern_tracker(\"abc\")",
          "output": "0"
        },
        {
          "input": "pattern_tracker(\"1a2b3c4\")",
          "output": "0"
        },
        {
          "input": "pattern_tracker(\"112233\")",
          "output": "2"
        }
      ],
  },
  {
    id: 9,
    level: 4,
    difficulty: "medium",
    name: "py_anagram",
    file: "py_anagram.py",
    description: {
      en: "Write a function that checks if two strings are anagrams.\nThey must contain exactly the same letters with the same quantity,\nignoring case and spaces.",
      de: "Write a function that checks if two strings are anagrams.\nThey must contain exactly the same letters with the same quantity,\nignoring case and spaces.",
      fr: "Write a function that checks if two strings are anagrams.\nThey must contain exactly the same letters with the same quantity,\nignoring case and spaces.",
      es: "Write a function that checks if two strings are anagrams.\nThey must contain exactly the same letters with the same quantity,\nignoring case and spaces.",
      it: "Write a function that checks if two strings are anagrams.\nThey must contain exactly the same letters with the same quantity,\nignoring case and spaces.",
    },
    signature: "def anagram(s1: str, s2: str) -> bool:",
    examples: [
        {
          "input": "anagram(\"listen\", \"silent\")",
          "output": "True"
        },
        {
          "input": "anagram(\"Triangle\", \"Integral\")",
          "output": "True"
        },
        {
          "input": "anagram(\"Dormitory\", \"Dirty Room\")",
          "output": "True"
        },
        {
          "input": "anagram(\"hello\", \"world\")",
          "output": "False"
        },
        {
          "input": "anagram(\"\", \"\")",
          "output": "True"
        },
        {
          "input": "anagram(\"abc\", \"abcc\")",
          "output": "False"
        }
      ],
  },
  {
    id: 10,
    level: 4,
    difficulty: "medium",
    name: "py_shadow_merge",
    file: "py_shadow_merge.py",
    description: {
      en: "Write a function that merges two sorted lists into one sorted list.",
      de: "Schreibe eine Funktion, die zwei sortierte Listen zu einer sortierten Liste zusammenfГјhrt.",
      fr: "Г‰cris une fonction qui fusionne deux listes triГ©es en une seule liste triГ©e.",
      es: "Escribe una funciГіn que fusione dos listas ordenadas en una sola lista ordenada.",
      it: "Scrivi una funzione che unisca due liste ordinate in unвЂ™unica lista ordinata.",
    },
    signature: "def shadow_merge(list1: list[int], list2: list[int]) -> list[int]:",
    examples: [
        {
          "input": "shadow_merge([1,3,5], [2,4,6])",
          "output": "[1,2,3,4,5,6]"
        },
        {
          "input": "shadow_merge([1,2,3], [4,5,6])",
          "output": "[1,2,3,4,5,6]"
        },
        {
          "input": "shadow_merge([1], [2,3,4])",
          "output": "[1,2,3,4]"
        },
        {
          "input": "shadow_merge([], [1,2,3])",
          "output": "[1,2,3]"
        },
        {
          "input": "shadow_merge([1,1,2], [1,3,3])",
          "output": "[1,1,1,2,3,3]"
        }
      ],
  },
  {
    id: 11,
    level: 4,
    difficulty: "medium",
    name: "py_string_permutation_checker",
    file: "py_string_permutation_checker.py",
    description: {
      en: "Write a function that determines if two strings are permutations of each other.\nCase sensitive. Whitespace and punctuation count as regular characters.\nEmpty strings are permutations of each other.",
      de: "Schreibe eine Funktion, die feststellt, ob zwei Strings Permutationen voneinander sind.\nZwei Strings sind Permutationen, wenn sie dieselben Zeichen mit denselben HГ¤ufigkeiten enthalten.\n\nDie Funktion soll:\n- PrГјfen, ob beide Strings genau dieselben Zeichen enthalten\n- ZeichenhГ¤ufigkeiten zГ¤hlen (groГџ-/kleinschreibungssensitiv)\n- True zurГјckgeben, wenn es Permutationen sind, sonst False\n- Leere Strings behandeln (zwei leere Strings sind Permutationen)\n- Leerzeichen und Satzzeichen wie normale Zeichen behandeln",
      fr: "Г‰cris une fonction qui dГ©termine si deux chaГ®nes sont des permutations lвЂ™une de lвЂ™autre.\nDeux chaГ®nes sont des permutations si elles contiennent les mГЄmes caractГЁres avec les mГЄmes frГ©quences.\n\nLa fonction doit :\n- VГ©rifier que les deux chaГ®nes contiennent exactement les mГЄmes caractГЁres\n- Compter les frГ©quences (sensible Г  la casse)\n- Retourner True si ce sont des permutations, sinon False\n- GГ©rer les chaГ®nes vides (deux chaГ®nes vides sont des permutations)\n- Traiter espaces et ponctuation comme des caractГЁres normaux",
      es: "Escribe una funciГіn que determine si dos cadenas son permutaciones entre sГ­.\nDos cadenas son permutaciones si contienen los mismos caracteres con las mismas frecuencias.\n\nLa funciГіn debe:\n- Comprobar que ambas cadenas tienen exactamente los mismos caracteres\n- Contar frecuencias (distingue mayГєsculas y minГєsculas)\n- Devolver True si son permutaciones, False en caso contrario\n- Manejar cadenas vacГ­as (dos vacГ­as son permutaciГіn)\n- Tratar espacios y puntuaciГіn como caracteres normales",
      it: "Scrivi una funzione che determini se due stringhe sono permutazioni lвЂ™una dellвЂ™altra.\nDue stringhe sono permutazioni se contengono gli stessi caratteri con le stesse frequenze.\n\nLa funzione deve:\n- Verificare che entrambe le stringhe contengano esattamente gli stessi caratteri\n- Contare le frequenze (case-sensitive)\n- Restituire True se sono permutazioni, altrimenti False\n- Gestire stringhe vuote (due vuote sono permutazioni)\n- Considerare spazi e punteggiatura come caratteri normali",
    },
    signature: "def string_permutation_checker(s1: str, s2: str) -> bool:",
    examples: [
        {
          "input": "string_permutation_checker(\"abc\", \"bca\")",
          "output": "True"
        },
        {
          "input": "string_permutation_checker(\"abc\", \"def\")",
          "output": "False"
        },
        {
          "input": "string_permutation_checker(\"listen\", \"silent\")",
          "output": "True"
        },
        {
          "input": "string_permutation_checker(\"hello\", \"bello\")",
          "output": "False"
        },
        {
          "input": "string_permutation_checker(\"\", \"\")",
          "output": "True"
        },
        {
          "input": "string_permutation_checker(\"a\", \"\")",
          "output": "False"
        },
        {
          "input": "string_permutation_checker(\"Abc\", \"abc\")",
          "output": "False"
        },
        {
          "input": "string_permutation_checker(\"a gentleman\",\"elegant man\")",
          "output": "True"
        }
      ],
  },
  {
    id: 12,
    level: 5,
    difficulty: "hard",
    name: "py_string_sculptor",
    file: "py_string_sculptor.py",
    description: {
      en: "Write a function that transforms a string by alternating the case of\nalphabetic characters only.\nNon-alphabetic characters remain unchanged and are NOT counted in the\nalternation index.\nThe first alphabetic character should be lowercase, the second uppercase, etc.\nSpaces reset the alternation (next alpha after a space is lowercase again).",
      de: "Schreibe eine Funktion, die einen String transformiert, indem nur alphabetische Zeichen abwechselnd groГџ/klein geschrieben werden. Nicht-alphabetische Zeichen bleiben unverГ¤ndert und zГ¤hlen nicht fГјr die Abwechslung. Das erste alphabetische Zeichen soll klein, das zweite groГџ, das dritte klein usw. sein.",
      fr: "Г‰cris une fonction qui transforme une chaГ®ne en alternant la casse des seuls caractГЁres alphabГ©tiques. Les autres caractГЁres restent inchangГ©s et ne comptent pas pour lвЂ™alternance. Le premier caractГЁre alphabГ©tique doit ГЄtre en minuscule, le second en majuscule, le troisiГЁme en minuscule, etc.",
      es: "Escribe una funciГіn que transforme una cadena alternando mayГєsculas y minГєsculas solo en caracteres alfabГ©ticos. Los demГЎs permanecen igual y no cuentan para la alternancia. El primer carГЎcter alfabГ©tico debe ser minГєscula, el segundo mayГєscula, el tercero minГєscula, y asГ­ sucesivamente.",
      it: "Scrivi una funzione che trasformi una stringa alternando maiuscole e minuscole solo per i caratteri alfabetici. Gli altri restano invariati e non contano per lвЂ™alternanza. Il primo carattere alfabetico deve essere minuscolo, il secondo maiuscolo, il terzo minuscolo, e cosГ¬ via.",
    },
    signature: "def string_sculptor(text: str) -> str:",
    examples: [
        {
          "input": "string_sculptor(\"hello\")",
          "output": "\"hElLo\""
        },
        {
          "input": "string_sculptor(\"Hello World\")",
          "output": "\"hElLo wOrLd\""
        },
        {
          "input": "string_sculptor(\"abc123def\")",
          "output": "\"aBc123DeF\""
        },
        {
          "input": "string_sculptor(\"Python3.9!\")",
          "output": "\"pYtHoN3.9!\""
        },
        {
          "input": "string_sculptor(\"\")",
          "output": "\"\""
        }
      ],
  },
  {
    id: 13,
    level: 5,
    difficulty: "hard",
    name: "py_twist_sequence",
    file: "py_twist_sequence.py",
    description: {
      en: "Write a function that rotates an array to the right by k positions.\nRotating right by k means the last k elements move to the front.",
      de: "Write a function that rotates an array to the right by k positions, rotating right by k means the last k elements move to the front.",
      fr: "Write a function that rotates an array to the right by k positions, rotating right by k means the last k elements move to the front.",
      es: "Write a function that rotates an array to the right by k positions, rotating right by k means the last k elements move to the front.",
      it: "Write a function that rotates an array to the right by k positions, rotating right by k means the last k elements move to the front.",
    },
    signature: "def twist_sequence(arr: list[int], k: int) -> list[int]:",
    examples: [
        {
          "input": "twist_sequence([1,2,3,4,5], 2)",
          "output": "[4,5,1,2,3]"
        },
        {
          "input": "twist_sequence([1,2,3], 1)",
          "output": "[3,1,2]"
        },
        {
          "input": "twist_sequence([1,2,3,4], 0)",
          "output": "[1,2,3,4]"
        },
        {
          "input": "twist_sequence([1,2,3], 5)",
          "output": "[2,3,1]"
        },
        {
          "input": "twist_sequence([], 3)",
          "output": "[]"
        }
      ],
  },
  {
    id: 14,
    level: 6,
    difficulty: "hard",
    name: "py_whisper_cipher",
    file: "py_whisper_cipher.py",
    description: {
      en: "Write a function that creates a Caesar cipher by shifting letters in a\nstring by a given amount.\nNon-alphabetic characters should remain unchanged.\nThe shift can be negative (shift left).",
      de: "Schreibe eine Funktion, die eine einfache VerschlГјsselung erzeugt, indem Buchstaben in einem String um einen gegebenen Betrag verschoben werden. Nicht-alphabetische Zeichen bleiben unverГ¤ndert.",
      fr: "Г‰cris une fonction qui rГ©alise un chiffrement simple en dГ©calant les lettres dвЂ™une chaГ®ne dвЂ™un montant donnГ©. Les caractГЁres non alphabГ©tiques restent inchangГ©s.",
      es: "Escribe una funciГіn que cree un cifrado simple desplazando las letras de una cadena una cantidad dada. Los caracteres no alfabГ©ticos deben permanecer iguales.",
      it: "Scrivi una funzione che crei una cifratura semplice spostando le lettere di una stringa di una quantitГ  data. I caratteri non alfabetici restano invariati.",
    },
    signature: "def whisper_cipher(text: str, shift: int) -> str:",
    examples: [
        {
          "input": "whisper_cipher(\"hello\", 3)",
          "output": "\"khoor\""
        },
        {
          "input": "whisper_cipher(\"Hello World!\", 1)",
          "output": "\"Ifmmp Xpsme!\""
        },
        {
          "input": "whisper_cipher(\"xyz\", 3)",
          "output": "\"abc\""
        },
        {
          "input": "whisper_cipher(\"ABC123def\", 5)",
          "output": "\"FGH123ijk\""
        },
        {
          "input": "whisper_cipher(\"\", 10)",
          "output": "\"\""
        },
        {
          "input": "whisper_cipher(\"abc\", -3)",
          "output": "\"xyz\""
        }
      ],
  },
];


const fs = require("fs");


const json = JSON.stringify(SUBJECTS, null, 4);

fs.writeFileSync("data.json", json, "utf8");