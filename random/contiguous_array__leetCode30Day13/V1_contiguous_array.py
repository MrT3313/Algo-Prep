def findMaxLength_subarraySum(nums):
    print(nums)
    # Variables
    SubArrays = []
    low = 0 
    high = low + 1
    print(low, high)

    while high < len(nums) and low < len(nums): 
        print(nums[low : high + 1])
        current_result =  sum(nums[low:high + 1])
        print(current_result)

        # Main Conditional
        if current_result == 0 or current_result == 1:
            SubArrays.append(nums[low:high + 1])

            # Increment Conditional
            if high < len(nums):
                high += 1
            elif low < len(nums):
                low += 1
        else: 
            # Increment Conditional
            if current_result < 0 and high < len(nums):
                high += 1
            elif current_result > 1 and low < len(nums):
                low += 1

    # Loop Through SubArrays
    print(SubArrays)
    result = [0, []]
    for array in SubArrays:
        if len(array) > result[0]:
            print('newMax: ', len(array),' - ',array)
            result = [len(array), array]

    # Return
    return result

# print(findMaxLength([0,1,0]))

# print(findMaxLength_subarraySum([0,1]))

def findMaxLength(nums):
    print(nums)

    # Variables
    SubArrays = []
    low = 0 
    high = low + 1

    # While
    while high < len(nums) and low < len(nums):
        print(nums[low:high + 1])
        current_result =  sum(nums[low:high + 1])
            
        # Main Conditional
        if check(nums[low:high + 1]):
            SubArrays.append(nums[low:high + 1])

        if high < len(nums):
            high += 1
        elif low < len(nums):
            low += 1
    
    # Loop Through SubArrays
    print(SubArrays)
    result = [0, []]
    for array in SubArrays:
        if len(array) > result[0]:
            print('newMax: ', len(array),' - ',array)
            result = [len(array), array]

    # Return
    return result

def check(array):
    # Data Structure:
    data = {
        0: 0,
        1: 0,
    }
    for num in array:
        if num == 0:
            data[num] += 1
        if num == 1: 
            data[num] += 1

    return data[0] == data[1]

# print(findMaxLength([0,1,0]))
print(findMaxLength([0,0,1,0,0,0,1,1]))