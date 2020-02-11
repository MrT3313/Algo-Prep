def threeNumberSum(array, targetSum):

    array.sort()
    print(array)

    result = []

    for i in range(len(array) -2 ):
        left = i + 1
        right = len(array) -1

        while left < right: 
            currSum = array[i] + array[left] + array[right]

            if currSum == targetSum:
                result.append([array[i], array[left], array[right]])
                left += 1
                right -= 1
            elif currSum < targetSum:
                left += 1
            elif currSum > targetSum:
                right -= 1

    return result


print(threeNumberSum([12,3,1,2,-6,5,-8,6], 0))