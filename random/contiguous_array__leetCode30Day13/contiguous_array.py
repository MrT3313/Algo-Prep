def findMaxLength(nums):
    dict = {}

    subarr, count = 0,0

    for i in range(len(nums)):
        if nums[i] == 1:
            count += 1
        else:
            count += -1
        
        if count == 0:
            subarr = i + 1
        if count in dict:
            subarr = max(subarr, i - dict[count])
        else:
            dict[count] = 1
    
    return subarr

print(findMaxLength([0,0,1,0,0,0,1,1]))
