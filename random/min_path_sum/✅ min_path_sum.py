# STUDY THESE SOLUTIONS!!

class Solution:
    def minPathSum(self, grid):
        def helper(i, j):
            if i == n or j == m:
                return float('inf')
 
            if i == n - 1 and j == m - 1:
                return grid[i][j]
 
            return grid[i][j] + min(helper(i, j + 1), helper(i + 1, j))
 
        n, m = len(grid), len(grid[0])
        return helper(0, 0)
 
    def minPathSumSol2(self, grid):
        def helper(i, j):
            if i == n or j == m:
                return float('inf')
 
            if i == n - 1 and j == m - 1:
                return grid[i][j]
 
            if (i, j) in memo:
                return memo[(i, j)]
 
            memo[(i, j)] = grid[i][j] + min(helper(i, j + 1), helper(i + 1, j))
            return memo[(i, j)]
 
        n, m, memo = len(grid), len(grid[0]), {}
        return helper(0, 0)
 
    def minPathSumSol3(self, grid):
        if not grid:
            return
        r, c = len(grid), len(grid[0])
        dp = [[0 for _ in range(c)] for _ in range(r)]
        dp[0][0] = grid[0][0]
 
        for i in range(1, r):
            dp[i][0] = dp[i - 1][0] + grid[i][0]
 
        for i in range(1, c):
            dp[0][i] = dp[0][i - 1] + grid[0][i]
 
        for i in range(1, len(grid)):
            for j in range(1, len(grid[0])):
                dp[i][j] = min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
 
        return dp[-1][-1]
 
    def minPathSumSol4(self, grid):
        if not grid:
            return
        r, c = len(grid), len(grid[0])
        pre = cur = [0] * c
        pre[0] = grid[0][0]
 
        for i in range(1, c):
            pre[i] = pre[i - 1] + grid[0][i]
 
        for i in range(1, r):
            cur[0] = pre[0] + grid[i][0]
            for j in range(1, c):
                cur[j] = min(cur[j - 1], pre[j]) + grid[i][j]
            pre = cur
 
        return cur[-1]
 
    def minPathSumSol5(self, grid):
        if not grid:
            return
        r, c = len(grid), len(grid[0])
        cur = [0] * c
        cur[0] = grid[0][0]
 
        for i in range(1, c):
            cur[i] = cur[i - 1] + grid[0][i]
 
        for i in range(1, r):
            cur[0] += grid[i][0]
            for j in range(1, c):
                cur[j] = min(cur[j - 1], cur[j]) + grid[i][j]
 
        return cur[-1]
 
    def minPathSumSol6(self, grid):
        rows, cols = len(grid), len(grid[0])
        dp = [0] * cols
        for i in range(rows):
            dp[0] += grid[i][0]
            for j in range(1, cols):
                dp[j] = (dp[j - 1] if i == 0 else min(dp[j], dp[j - 1])) + grid[i][j]
 
        return dp[-1]
 
    def minPathSumSol7(self, grid):
        if not grid:
            return
        r, c = len(grid), len(grid[0])
 
        for i in range(1, c):
            grid[0][i] += grid[0][i - 1]
 
        for i in range(1, r):
            grid[i][0] += grid[i - 1][0]
 
        for i in range(1, r):
            for j in range(1, c):
                grid[i][j] += min(grid[i - 1][j], grid[i][j - 1])
 
        return grid[-1][-1]
 
    # ----
 
    def minPathSumSol8(self, grid):
        if len(grid) == 0:
            return 0
        n, m = len(grid), len(grid[0])
        dp = [[0] * m] * n
        for i in range(n - 1, -1, -1):
            for j in range(m - 1, -1, -1):
                if i == n - 1 and j != m - 1:
                    dp[i][j] = grid[i][j] + dp[i][j + 1]
                elif i != n - 1 and j == m - 1:
                    dp[i][j] = grid[i][j] + dp[i + 1][j]
                elif i != n - 1 and j != m - 1:
                    dp[i][j] = grid[i][j] + min(dp[i + 1][j], dp[i][j + 1])
                else:
                    dp[i][j] = grid[i][j]
        return dp[0][0]
 
    def minPathSumSol9(self, grid):
        if len(grid) == 0:
            return 0
        n, m = len(grid), len(grid[0])
        dp = [0] * m
        for i in range(n - 1, -1, -1):
            for j in range(m - 1, -1, -1):
                if i == n - 1 and j != m - 1:
                    dp[j] = grid[i][j] + dp[j + 1]
                elif i != n - 1 and j == m - 1:
                    dp[j] = grid[i][j] + dp[j]
                elif i != n - 1 and j != m - 1:
                    dp[j] = grid[i][j] + min(dp[j], dp[j + 1])
                else:
                    dp[j] = grid[i][j]
        return dp[0]
 
    def minPathSumSol10(self, grid):
        if len(grid) == 0:
            return 0
        n, m = len(grid), len(grid[0])
        dp = [float('inf') for _ in range(m)]
        dp[0] = 0
        for i in range(n):
            dp[0] += grid[i][0]
            for j in range(1, m):
                dp[j] = grid[i][j] + min(dp[j], dp[j - 1])
        return dp[-1]