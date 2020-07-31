def getNthFib(n, 
    memoize = {
        1: 0, 
        2: 1
    }
):
    ## -- ##
    if n in memoize:
        return memoize[n]
    else: 
        memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize)
        return memoize[n]


print(getNthFib(2))
print(getNthFib(5))
print(getNthFib(10))
print(getNthFib(50))