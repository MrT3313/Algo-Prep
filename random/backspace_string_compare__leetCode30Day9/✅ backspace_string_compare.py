def backspaceCompare(S, T):
    newS = backspace(S)
    print('--NEXT STRING--')
    newT = backspace(T)
    print('this is newS: ', newS)
    print('this is newT: ', newT)

    return newS == newT

def backspace(string):
    result = []

    for char in string:
        if char != "#":
            print("Char added to result: ", char)
            result.append(char)
        elif result:
            print(result)
            # Remove what was last added (right before the # was seen)
            result.pop()
            print(result)

    # Return
    return "".join(result)
    

# print(backspaceCompare( "ab#c", "ad#c" ))
print(backspaceCompare( "ab##", "c#d#" ))