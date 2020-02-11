def powerset(array, idx = None):
    # Initial Call and Error Catching
    if idx is None:
        idx = len(array) -1
    elif  idx < 0:
        return [[]]

    # get element at end of array
    ele = array[idx]
    # make all subsets 
    subsets = powerset(array, idx - 1)

    for i in range(len(subsets)):
        currentSubset = subsets[i]
        subsets.append(currentSubset + [ele])
    return subsets

print(powerset([1,2]))
print(powerset([1,2,3]))