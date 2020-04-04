def single_number(nums):
    numSet = set()

    for num in nums:
        print(num)
        if num in numSet:
            numSet.remove(num)
        else:
            numSet.add(num)
        print(numSet)

    return list(numSet)[0]


# print('RESULT',single_number([2,2,1]))
# print('RESULT',single_number([4,1,2,1,2]))
print('RESULT',single_number([4,1,7,4,2,9,7,1,2]))
