def riverSizes(matrix):
    sizes = []
    visited = [[False for value in row] for row in matrix]
    print(visited)

    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if visited[i][j]:
                continue
            traverseNode(i, j, matrix, visited, sizes)
    return sizes

def traverseNode(i, j, matrix, visited, sizes):
    currentRiverSize = 0
    nodesToExplore = [[i,j]]

    # Stack 
    while len(nodesToExplore):
        currentNode = nodesToExplore.pop()
        i = currentNode[0]
        j = currentNode[1]

        # Skip if it is already visited
        if visited[i][j]:
            continue
        # if not visited..it has not been visited so mark it as such
        visited[i][j] = True
        
        # Skip if the element is not the start OR part of a river
        if matrix[i][j] == 0:
            continue
        
        # update river size
        currentRiverSize += 1
        
        # get and append list of unvisited neighbors to nodesToExplore
        unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited)
        for neighbor in unvisitedNeighbors:
            nodesToExplore.append(neighbor)
    
    if currentRiverSize > 0:
        sizes.append(currentRiverSize)

def getUnvisitedNeighbors(i, j, matrix, visited):
    unvisitedNeighbors = []
    if i > 0 and not visited[i - 1][j]:
        unvisitedNeighbors.append([i - 1, j])
    if i < len(matrix) -1 and not visited[i + 1][j]:
        unvisitedNeighbors.append([i + 1, j])
    if j > 0 and not visited[i][j - 1]:
        unvisitedNeighbors.append([i, j -1])
    if j < len(matrix[0]) - 1 and not visited[i][j + 1]:
        unvisitedNeighbors.append([i, j + 1])
    return unvisitedNeighbors

print(riverSizes(
    [
        [1, 0, 0, 1, 0],
        [1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 0],
    ]
))