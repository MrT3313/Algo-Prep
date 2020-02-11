
def bubbleSort(array):
    isSorted = False
    counter = 0 # @ each iteration you know the last num is in correct position

    while not isSorted:
        isSorted = True
        # -1 : is to prevent checking w/ out of bounds
        # counter : makes a shorter array each iteration 
        for i in range(len(array) - 1 - counter):
            if array[i] > array[i + 1]:
                swap(i, i + 1, array)
                isSorted = False
        counter += 1
    return array

def swap(i, j, array):
    array[i], array[j] = array[j], array[i]


print(bubbleSort([8,5,2,9,5,6,3]))