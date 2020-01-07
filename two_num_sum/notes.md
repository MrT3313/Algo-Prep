1. Notes:
- 'distinct integer values' = no num repeated
- you need to check every item in 

2. Questions:
- Is the array sorted??

3. Solutions
4.0: Naive Solution -- Nested four loops
Time = O(n^2)
Space = O(1)

3.1:  Personal - Regular Array
Time = O(n)
Space = O(n)
- get first number
- subtract first number from target number --> what number are you looking for
- see if the array includes that number 
- if yes -- return array
- if no -- move to second item in array

3.2: Video Solution - Hash Tables
Time = O(n)
Space = O(n)

3.3:  Video Solution - Sorted Array 
** BEST SOLUTION **
Time = O(n log(n))
Space = O(1)
- Variables: 
    - target_sum 
    - L Pointer & R Pointer
- L + R < target_sum --> WE WANT GREATER NUMBER
    - move L Pointer to right
- L + R > target_sum --> WE WANT SMALLER NUMBER
    - move R Pointer to left