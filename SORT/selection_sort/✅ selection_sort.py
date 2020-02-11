def selectionSort(array):
    # index of FIRST number in UNSORTED sublist 
    unsorted_start_idx = 0

    while unsorted_start_idx < len(array) - 1:
        # assign smallestCheck index 
        smallestCheck_idx = unsorted_start_idx

        # Find smallest number is unsorted sublist 
        for i in range(unsorted_start_idx + 1, len(array)):
            if array[smallestCheck_idx] > array[i]:
                smallestCheck_idx = i

        # Swap the smallest number found in the unsorted SUBlist
        # into the last position on the sorted sublist
        swap(unsorted_start_idx, smallestCheck_idx, array)

        # Increment start of unsorted array
        unsorted_start_idx += 1

    # Return
    print(array)
    return array
def swap(i, j, array):
    array[i], array[j] = array[j], array[i]

selectionSort([8,5,2,9,6,5,3])
selectionSort([3,12,56,745,8,5,2,99,8,65,7])