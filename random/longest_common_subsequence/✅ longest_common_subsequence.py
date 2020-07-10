# def longestCommonSubsequence(text1, text2):
#     n = len(text1)
#     m = len(text2)
    
#     dp=[[0]*(m + 1) for z in range(n + 1)]
    
#     for i in range(n):
#         for j in range(m):
#             if text1[i]==text2[j]:
#                 dp[i + 1][j + 1] = dp[i][j] + 1
#             else:
#                 dp[i + 1][j + 1] = max(dp[i][j + 1], dp[i + 1][j])
#     return dp[-1][-1]

def longestCommonSubsequence(str1, str2):
    lcs = [[[] for x in range(len(str1) + 1)] for y in range(len(str2) + 1)]
    for i in range(1, len(str2) + 1): 
        for j in range(1, len(str1) + 1): 
            if str2[i - 1] == str1[j - 1]: 
                lcs[i][j] = lcs[i -1][j-1] + [str2[i -1]]
            else    lcs[i][j] = max(lcs[i -1][j], lcs[i][j - 1], key=len)
    return lcs[-1][-1]