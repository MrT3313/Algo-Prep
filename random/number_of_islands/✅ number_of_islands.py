def numIslands(grid):
    # Variables
    count = 0

    # Edge Case
    if not grid:
        return 0

    # Loop Through Grid
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == '1':
                # Call DFS
                dfs(grid, i, j)

                # Increment Island Count
                count += 1

    # Return Final Count
    return count

def dfs(grid, i, j):
    if i < 0 or j < 0 or i >= len(grid) or j >= len(grid[0]) or grid[i][j] != '1':
        return
        
    grid[i][j] = '#'            # Mark Visited
    
    dfs(grid, i+1, j)           # RIGHT one
    dfs(grid, i-1, j)           # LEFT one
    dfs(grid, i, j+1)           # UP one
    dfs(grid, i, j-1)           # DOWN one

print(numIslands(
    [
        ["1","1","0","0","0"],
        ["1","1","0","0","0"],
        ["0","0","1","0","0"],
        ["0","0","0","1","1"]
    ]
))