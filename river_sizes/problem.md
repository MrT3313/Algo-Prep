You are giving a two-dimensional array (matrix) of potentially unequal height and width containing only 0s and 1s. Each 0 represents land, and each 1 represents part of a river. a river consists of any number of 1s that are either horizontally or vertically adjacent (but not diagonally adjacent). The number of adjacent 1s forming a river termine its size. Write a function that returns an array of the sizes of all rivers represented in the input matrix. Note that these sizes do not need to be in any perticular order. 

input([
    [1, 0, 0, 1, 0]
    [1, 0, 1, 0, 0]
    [1, 0, 1, 0, 1]
    [1, 0, 1, 0, 1]
    [1, 0, 1, 1, 1]
])

output = [1,2,2,2,5]