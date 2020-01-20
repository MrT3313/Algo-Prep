- Binary Search --> 1/2 each time
- Array needs to be sorted
- Recursion -> its the same problem over and over again just with half the array size

POINTERS
1. Left
2. Right
3. Middle

EDGE CASES
- Left > Right -> number not found
- Left === Right 

Pseudo: 
1. Random Number between 0 and len(array)-1
2. if value @ array[randomNumber] >
    - you only care about the RIGHT side of the array (idx > randomNumber)
3. if value @ arrau[randomNumber] <
    - you only care about the LEFT side of th earray (idx < randomNumber)