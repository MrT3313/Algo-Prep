# V1 - Complicated
# def isMonotonic(array):
#     # Edge Case
#     if len(array) <= 2:
#         return True

#     direction = array[1] - array[0]

#     for i in range(2, len(array)):
#         if direction == 0:
#             direction = array[i] - array[i -1]
#             continue
#         if breaksDirection(direction, array[i-1], array[i]):
#             return False

#     return True

# def breaksDirection(direction, prevInt, currInt):
#     difference = currInt - prevInt
#     if direction > 0:
#         return difference < 0
#     return difference > 0

# V2 - Easier
def isMonotonic(array):
    # Check non-increasing
    isNonDecreasing = True
    isNonIncreasing = True

    for i in range(1, len(array)):
        if array[i] < array[i - 1]:
            isNonDecreasing = False
        if array[i] > array[i - 1]:
            isNonIncreasing = False

    return isNonDecreasing or isNonIncreasing
