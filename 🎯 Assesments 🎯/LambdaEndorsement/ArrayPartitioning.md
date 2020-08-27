# Problem

given an array of numbers, you are required to check if it is possible to partition the array into some subsequences of length `k` such that: 

1. Each element in the array occurs in exactly one subsequence
2. All the numbers in the suvsequence are distinct
3. Elements in the array having the same value must be in different subsequences

Is it possible to partition the array satisfying the above conditions? If it is possible return `Yes` else return `No`

# Analysis 

## Inputs
- Positive & Negative Integers allowed 
- BIG and small integers allowed

## Edge Case 
1. use `%` to determine, regardless of the numbers, if they can be evenly split into `k` buckets

## Starting Variables
1. Make K empty buckets => instead of simply making `[]` and appending into it => we know how many buckets there needs to be and therefore we can take a dynamic programming approach

## Steps
2. For EACH number => we want to potentially check EACH subsequence

3. Break 

## Time & Space Complexity

Space = 0(1)
Time = O(n * k) ==> `n = numbers / k = buckets`