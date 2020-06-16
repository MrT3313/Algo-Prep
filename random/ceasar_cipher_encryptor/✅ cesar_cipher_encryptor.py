# V1 - Using ord() function 
def caesarCipherEncryptor(string, key):
    newLetters = []
    newKey = key % 26

    for letter in string:
        newLetters.append(getNewLetter(letter, newKey))
    return "".join(newLetters)

def getNewLetter(letter, key):
    newLetterCode = ord(letter) + num
    return chr(newLetterCode) if newLetterCode <= 122 else chr(96 + newLetterCode % 122)


# V2 - Not usiung ord() function
# def caesarCipherEncryptor(string, key):
#     newLetters = []
#     newKey = key % 26
# 	alphabet = list('abcdefghijklmnopqrstuvwxyz')

#     for letter in string:
#         newLetters.append(getNewLetter(letter, newKey, alphabet))
#     return "".join(newLetters)

# def getNewLetter(letter, key, alphabet):
#     newLetterCode = alphabet.index(letter) + key
#     return alphabet[newLetterCode] if newLetterCode <= 25 else alphabet[-1 + newLetterCode % 25]

