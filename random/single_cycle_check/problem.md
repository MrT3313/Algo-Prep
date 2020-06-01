You're given an array of integers where each integer represents a jump of its value in te array. For instance, the integer 2 represents a jump of two indecies forward in the array; the integer -3 represents a jump of three indecies backward in the array. 

If a jump spills past the array;s bounds, it wraps over to the other side. For instnace, a jump of -1 at indec 0 brings us to the last index in the array. Similarlym, a jump of 1 at the last index in the array brings us to index 0.

Write a function that returns a boolean representing whether the jumps in the array form a single cycle. A single cycle occures if, starting at any index in the array and following the jumps, every element in the array is visited exactly once befor elanding back on the starting index. 