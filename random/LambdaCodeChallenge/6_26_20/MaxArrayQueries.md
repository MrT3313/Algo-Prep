# Problem

You are given a 1-indexed array of zeros as well as a list of queries.

For each query, the value K must be added to all of the values in the array between the start and and indecies, inclusive. Then, once all the queries have been applied to the array, your function should return the maximum value in the array. 

# Analysis

## Inputs

## Edge Case

## Starting Variables
1. resultList filled with `0's` going to `n+1` due to 1-indexed array

## Steps
2. Loop through queries
    - add POSITIVE value @ starting index
    - add NEGATIVE value @ ending index
3. loop through array and add current index PLUS previous index 

## Time & Space Complexity
Space = O(1) => O(n)
Time = O(q) ==> `q = queries` since n & q are the same length 