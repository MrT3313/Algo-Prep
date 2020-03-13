def getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo):
    # Write your code here.
    depthOne = getDepth(descendantOne, topAncestor)
    depthTwo = getDepth(descendantTwo, topAncestor)

    if depthOne > depthTwo: 
        return backtrackTree(descendantOne,descendantTwo, depthOne - depthTwo)
    else:
        return backtrackTree(descendantTwo ,descendantOne, depthTwo - depthOne)

def getDepth(item, top):
    depth = 0
    while item != top: 
        depth += 1
        item = item.ancestor
    return depth

def backtrackTree(lower, higher, diff):
    while diff > 0: 
        lower = lower.ancestor
        diff -= 1
    while lower != higher:
        lower = lower.ancestor
        higher = higher.ancestor
    return lower