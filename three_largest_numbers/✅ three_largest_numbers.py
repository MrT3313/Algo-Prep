# - ! - RUNTIME ANALYSIS - ! - #
## Time Complexity: O(n)
## Space Complexity: O(1) 

# - ! - START CODE - ! - #
# - 1 - # Define Main Function 
def FIND_three_largest_numbers(array):
    # 1.1: Create data structure to hold final array
    finalResult = [None, None, None]

    # 1.2: Loop through each item in the check array and all helper method
    for num in array:
        updateLargest(finalResult, num)
        print(finalResult)
    
    # 1.3: Return final array
    return finalResult

# - 2 - # Define Update Helper Function
def updateLargest(finalResult, num):
    # 2.1: Check Largest in finalResult
    if finalResult[2] is None or num > finalResult[2]:
        # 2.1.1 Shift is needed
        shift_and_update(finalResult, num, 2)

    # 2.2: Check Middle in finalResult
    elif finalResult[1] is None or num > finalResult[1]:
        # 2.2.1 Shift is needed
        shift_and_update(finalResult, num, 1)

    # 2.3: Check First in finalResult 
    elif finalResult[0] is None or num > finalResult[0]:
        #2.3.1 Shift is needed
        shift_and_update(finalResult, num, 0)

# - 3 - # Define SHIFT AND UPDATE helper function
def shift_and_update(array, num, idx):
    for i in range(idx + 1):
        if i == idx:
            array[i] = num
        else: 
            array[i] = array[i + 1]


# FIND_three_largest_numbers([12,5,7,5,35,187,45,3])
FIND_three_largest_numbers([10,5,9,10,12])
