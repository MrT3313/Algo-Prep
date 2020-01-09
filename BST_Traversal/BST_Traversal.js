// IMPORTS
/* Binary Search Tree from BST_Construction problem 
    Methods:
        - insert 
        - contains
        - removes
*/ 
const BST = require('../BST_Construction/BST_Construction.js')

// SETUP
/* Create Initial BST for problem
    
*/
let test = new BST(10)
test.insert(15)
test.insert(5)
test.insert(5)
test.insert(2)
test.insert(22)
test.insert(1)
console.log(test)

// FUNCTIONS
// - 1 - // IN ORDER
function inOrderTraverse(tree, array) {
    if (tree !== null) {
        inOrderTraverse(tree.left, array)
        array.push(tree.value)
        inOrderTraverse(tree.right, array)
    }
    return array
}
console.log(inOrderTraverse(test, []))

// - 2 - // PRE ORDER
function preOrderTraverse(tree, array) {
    if (tree !== null) {
        array.push(tree.value)
        preOrderTraverse(tree.left, array)
        preOrderTraverse(tree.right, array)
    }
    return array
}
console.log(preOrderTraverse(test, []))

// - 3 - // POST ORDER
function postOrderTraverse(tree, array) {
    if (tree !== null) {
        postOrderTraverse(tree.left, array) 
        postOrderTraverse(tree.right, array)
        array.push(tree.value)
    }
    return array
}
console.log(postOrderTraverse(test, []))