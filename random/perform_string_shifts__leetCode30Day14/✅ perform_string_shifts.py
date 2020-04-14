def stringShift(s, shift):
    leftMove = 0 
    stringLength = len(s)
    for direction, amount in shift:
        if direction == 0:
            leftMove = leftMove + amount
        else:
            leftMove -= amount
    leftMove = leftMove % stringLength
    return s[leftMove:] + s[:leftMove]


print(stringShift('abcdefg', [[1,1],[1,1],[0,2],[1,3]]))


