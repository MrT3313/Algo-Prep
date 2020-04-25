def lastStoneWeight(stones):
    # Sort List of Stones
    stones.sort()
    print(stones)

    # Base Case
    if len(stones) == 1: 
        return stones[0]
    if len(stones) == 0:
        return 0

    # Set Variables
    y = stones[-1:][0]
    stones.remove(y)
    x = stones[-1:][0]
    stones.remove(x)
    print('y',y)
    print('x',x)

    # Conditional
    if x != y:
        newNum = y - x
        stones.append(newNum)
    
    # Recurse
    print('Pre Recurse: ', stones)
    return lastStoneWeight(stones)    

# print(lastStoneWeight([2,7,4,1,8,1]))
print(lastStoneWeight([4,3,4,3,2]))