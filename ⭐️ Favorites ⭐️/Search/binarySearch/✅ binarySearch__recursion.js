// __ MAIN FUNCTION __
function binarySearch__recursion(array, target) {
    // Setup
    let sortedArray = array.sort(function(a,b){return a - b})
    console.log(sortedArray)
    
    // Variables
    leftPointer = 0
    rightPointer = array.length - 1

    result = recurse(array, target, leftPointer, rightPointer)    
return result}

function recurse(array, target, L, R) {
    // Edge Case
    if (L > R){ return - 1 }
    
    // Logic
    // - 1 - // Find Middle Number
    middleIdx = Math.floor((L + R) / 2)
    console.log(middleIdx) 
    middle = array[middleIdx]
    console.log(middle)

    // - 2.1 - // middle === target
    if (target === middle) {
        return middle
    }
    // - 2.2 // target < middle
    if (target < middle) {
        return recurse(array, target, L, middleIdx - 1)
    }
    // - 2.3 // target > middle
    if (target > middle) {
        return recurse(array, target, middleIdx + 1, R)
    }
}

// -- *** TESTS *** -- //
// -- *** TESTS *** -- //
// -- *** TESTS *** -- //
console.log(binarySearch__recursion([0,100,1,21,33,45,47,61,71,72,76], 33))
console.log(binarySearch__recursion([0,100,1,21,33,45,47,61,71,72,76], 72))
console.log(binarySearch__recursion([0,21,1], 33))