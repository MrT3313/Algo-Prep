def productExceptSelf(nums):
    output = [1] * len(nums)

    prod = 1
    for i in range(len(nums)):
        output[i] *= prod
        prod *= nums[i]
    
    prod = 1
    for i in range(len(nums) -1, -1, -1):
        output[i] *= prod
        prod *= nums[i]

    return output
# print(productExceptSelf([1,2,3,4]))
print(productExceptSelf([0,0]))
# print(productExceptSelf([9,0,-2]))