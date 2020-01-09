You are given a BST data structure consisting of BST nodes. Each BST node has an integer value stores in a property called "value" and two children nodes stored in properties "left" and "right", respectively. A node is said to be a BST node if and only if it satisfies the BST property: 
    - its value is strictly greater than the values of every node to its left;
    - its value is less than or equal to the values of every node to its right;
    - both of its children nodes are either BST node themselves or None (null) values.

Write three functions that take in an empty array, traverse the BST, and its nodes values to the input array, and return that array. The three functions should traverse the BST using the:
    1. in-order traversal
    2. pre-order traversal
    3. post-order-traversal 

Example Input:
       10
      /  \
     5    15
    / \     \
  2    5     22
 /
1

Sample Output:
inOrderTraversal => [1,2,5,5,10,15,22]
preOrderTraversal => [10,5,2,1,5,15,22]
postOrderTraversal => [1,2,5,5,22,15,10]

