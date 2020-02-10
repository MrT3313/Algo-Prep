def powerset(array):
    subsets = [[]]

    for ele in array:
        for i in range(len(subsets)):
            currentSubset = subsets[i]
            subsets.append(currentSubset + [ele])
    
    return subsets

print(powerset([1,2]))
print(powerset([1,2,3]))
