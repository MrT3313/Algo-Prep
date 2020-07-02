def maxSubsetSumNoAdjacent(array):
    if not len(array):
        return
    elif len(array) == 1:
        return array[0]
    maxSums = array[:]
    print(f'1{maxSums}')
    maxSums[1] = max(array[0], array[1])
    print(f'2{maxSums}')
    for i in range(2, len(array)):
        print(maxSums[i])
        maxSums[i] = max(maxSums[i - 1], maxSums[1 - 2] + array[i])
        print(f'I = {i}{maxSums}')
    
    return maxSums[-1]

print(maxSubsetSumNoAdjacent([75,105,120,75,90,135]))