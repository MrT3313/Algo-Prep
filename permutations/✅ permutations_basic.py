def getPerms(array):
    perms = []

    permsHelper(array, [], perms)
    return perms

def permsHelper(array, currentPermutation, perms):
    if not len(array) and len(currentPermutation):
        perms.append(currentPermutation)
    else:
        for i in range(len(array)):
            newArray = array[:i] + array[i + 1:]
            newPerm = currentPermutation + [array[i]]

            permsHelper(newArray, newPerm, perms)

print(getPerms([1,4,6]))



