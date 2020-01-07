// - 1 - // ✅
function two_num_sum__NAIVE (array, targetSum) {
    // Result to Return
    let result = undefined

    // First Loop 
    array.forEach((element, index) => {
        console.log(`${index} : ${element}`)

        // Second Loop
        for (let i = array.indexOf(element) + 1; i < array.length; i++ ) {
            console.log(array[i])

            // If Conditional
            console.log(element, array[i])

            if (element + array[i] === targetSum) {
                console.log([element, array[i]])
                result = [element, array[i]]
            }
        }
    });
return result}
// console.log(two_num_sum__NAIVE([3,5,-4,8,11,1,-1,6], 10))

// - 2 - // ✅
function two_num_sum__RegularArray(array, targetSum) {
    // Variables
    let nums = []
    let checkFor = undefined 
    let result = undefined

    // Loop
    array.forEach(element => {
        console.log(element)

        // Find Needed Number
        checkFor = targetSum - element
        console.log(checkFor)

        // If Conditional
        if (nums.includes(checkFor)) {
            result = [checkFor, element]
        } else {
            nums.push(element)
        }
    })
return result}
// console.log(two_num_sum__RegularArray([3,5,-4,8,11,1,-1,6], 10))

// - 3 - // ❌
// TODO: Try to actually implement a HASH TABLE vs a regular JS array
function two_num_sum__HashTable(array, targetSum) {}
// console.log(two_num_sum__HashTable([3,5,-4,8,11,1,-1,6], 10))

// - 4 - // ✅
function two_num_sum__SortedArray(array, targetSum) {
    // Variables
    let L_pointer = undefined
    let R_pointer = undefined
    let result = []

    // Sort Array
    array.sort((a,b) => {
        return a - b
    })
    console.log(array)

    // Set Pointers
    L_pointer = 0
    R_pointer = array.length - 1

    // While Loop --> While pointers have not overlapped 
    while (L_pointer < R_pointer) {
        // Get Current Sum To Check
        let currentSum = array[L_pointer] + array[R_pointer]
        console.log(`${array[L_pointer]} : ${array[R_pointer]}`)
        console.log(currentSum)

        // If Conditional
        if (currentSum === targetSum) {
            result = [array[L_pointer], array[R_pointer]]
            return result
        } else if (currentSum < targetSum) {
            // Need BIGGER Number => Move Left Pointer +1
            L_pointer += 1
        } else if (currentSum > targetSum) {
            // Need SMALLER Number => Mode Right Pointer -1 
            R_pointer -= 1
        }
    }

return result}
console.log(two_num_sum__SortedArray([3,5,-4,8,11,1,-1,6], 10))
// console.log(two_num_sum__SortedArray([-21,301,12,4,65,56,210,356,9,-47], 164))

