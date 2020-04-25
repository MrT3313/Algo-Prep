We have a collection of stones, each stone has a positive integer of weight.

Each turn, we choose the two HEAVIEST stones and smash them together. Suppose the stones have weights`x` & `y` with `x <= y`. The result of this smash is:
    
    - if `x == y` then BOTH stones are DESTROYED
    - if `x `!= y` then `x` is totally destroyed and the `y = y - x`

-Example 1:

Input: [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.