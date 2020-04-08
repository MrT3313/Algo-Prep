# Problem
Fiven an integer array `arr`, count element `x` such that `x + 1` is also in `arr`

# Questions / Notes
- Array NOT sorted initially
- how to handle duplicates? => dont think it matters

# Examples
- Example 1:
Input: arr = [1,2,3]  
Output: 2  
Explanation: 1 and 2 are counted cause 2 and 3 are in arr.  

- Example 2:
Input: arr = [1,1,3,3,5,5,7,7]  
Output: 0  
Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.  

- Example 3:
Input: arr = [1,3,2,3,5,0]  
Output: 3  
Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.  

- Example 4:
Input: arr = [1,1,2,2]  
Output: 2  
Explanation: Two 1s are counted cause 2 is in arr.  

- Example 5:
Input: arr = [2,9,0,7,6,2,7,7,0]
Output: 1
Explanation (MrT's -- taken from failed run in LeetCode Submission): need to loop through ALL elements in the array and not just return result as soon as num + 1 is no in the hash set. 
