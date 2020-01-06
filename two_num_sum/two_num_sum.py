def two_num_sum_NAIVE(array, targetSum):
    # First Loop
    for i in range(len(array) - 1):
        firstNum = array[i]

        # Second Loop
        for j in range(i + 1, len(array)):
            secondNum = array[j]

            # If Conditional
            if firstNum + secondNum == targetSum:
                return [firstNum, secondNum]
    return []


