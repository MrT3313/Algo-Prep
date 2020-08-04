def balancedBrackets(string):
    # Variables
    openingBrackets = "([{"
    closingBrackets = ")]}"
    matchingBrackets = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }
    stack = []

    # Logic
    for char in string:
        if char in openingBrackets:
            stack.append(char)
        elif char in closingBrackets:
            # Edge Case
            if len(stack) ==  0:
                return False
            # Matching bracket check
            if stack[-1] == matchingBrackets[char]:
                stack.pop()
			else:
			    return False
    return len(stack) == 0 