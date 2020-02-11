def binarySearch(array, target):
    leftPointer = 0
    rightPointer = len(array) - 1

    result = recurse(array, target, leftPointer, rightPointer)
    print(result)
    return result
    
def recurse(array, target, left, right):
    # Number Not Found
    if left > right: 
        return - 1 
    
    # Find Current Middle
    middle = (left + right) // 2 # '//' means devide and round down
    middleNum = array[middle]
    # In updating the current middle did you find the target?
    if target == middleNum:
        return middle

    # <
    elif target < middleNum:
        # Recurse => ONLY difference is we are passing in a new RIGHT POINTER
        # New Right Pointer set ONE TO THE LEFT of the middle pointer
        return recurse(array, target, left, middle -1 )
    # > 
    elif target > middleNum:
        # Recurse
        # New Left Pointer set ONE TO THE RIGHT of the middle pointer
        return recurse(array, target, middle + 1, right)
    else: 
        return f'You done messed up'


binarySearch([0,1,21,33,45,45,61,71,72,76], 33)
binarySearch([0,1,21], 33)