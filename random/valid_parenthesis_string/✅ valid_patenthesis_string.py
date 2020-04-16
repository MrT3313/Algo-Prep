def checkValidString(s):
    if len(s) == 0 or s == "*":
        return True
    if len(s) == 1:
        return False
    leftBal = 0
    for i in s:
        if i == ')':
            leftBal -= 1
        else:
            leftBal += 1
        
        if leftBal < 0:
            return False
        
    if leftBal == 0:
        return True

    rightBal = 0
    for i in reversed(s):
        if i == "(":
            rightBal -= 1
        else:
            rightBal += 1
        
        if rightBal < 0:
            return False
        
    return True  


