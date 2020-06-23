def subarraySort(array):
    minOutOfOrder = float("inf")
    maxOutOrOrder = float("-inf")

    for i in range(len(array)):
        num = array[i]
        if isOutOfOrder(i, num, array):
            minOutOfOrder = min(minOutOfOrder, num)
            maxOutOrOrder = max(maxOutOrOrder, num)

    if minOutOfOrder == float("inf"):
        return [-1, -1]
    
    subarrayLeftIdx = 0
    while minOutOfOrder >= array[subarrayLeftIdx]:
        subarrayLeftIdx += 1

    subarrayRightIdx = len(array) - 1
    while maxOutOrOrder <= array[subarrayRightIdx]:
        subarrayRightIdx -= 1
    return [subarrayLeftIdx, subarrayRightIdx]


def isOutOfOrder(i, num, array):
    if i == 0:
        return num > array[i + 1]
    if i == len(array) - 1:
        return num < array[i - 1]
    return num > array[i + 1] or num < array[i - 1]