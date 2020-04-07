def countElements(arr):
    # Variables
    numSet = set()
    result = 0

    # Sort Array
    arr.sort()

    # Add All Elements To Set
    for num in arr:
        numSet.add(num)

    # Loop Through `arr` NOT `set`
    for item in arr:
        if item + 1 in numSet:
            result += 1

    # Return
    return result

# print(countElements([1,1,2,2]))
# print(countElements([1,2,3]))
# print(countElements([1,1,3,3,5,5,7,7]))
# print(countElements([1,3,2,3,5,0]))
print(countElements([2,9,0,7,6,2,7,7,0]))
