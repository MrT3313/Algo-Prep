def moveElementToEnd(array, toMove):
    i = 0
    j = len(array) - 1
    while i < j: 
        # make sure J isnt pointing at the wanted number
        # error check to make sure you have not overlapped i & j (edge cases this can happen)
        while i < j and array[j] == toMove:
            j -= 1
        
        # swap
        if array[i] == toMove:
            array[i], array[j] = array[j], array[i]

        # increment i 
        i += 1
        
    # Result
    return array


print(moveElementToEnd([3,4,2,5,6,8,2,4,5,6,9,2,2,4,5,8,2,4,56,6,5], 2))
