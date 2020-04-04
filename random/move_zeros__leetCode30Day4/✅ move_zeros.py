def moveZeroes(nums):
    n = len(nums)
    count = 0 # Count of non-zero elements 
      
    # Move all NON Zeros to FRONT
    for i in range(n): 
        if nums[i] != 0: 
              
            # Move to front
            nums[count] = nums[i] 

            # Increment Count
            count+=1
    
    print('Current Count:', count)

    # Make all elements from count to end of array = 0
    while count < n: 
        nums[count] = 0
        count += 1

    print(nums)

moveZeroes([0,1,0,3,12])