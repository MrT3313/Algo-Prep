// Status: ✅

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