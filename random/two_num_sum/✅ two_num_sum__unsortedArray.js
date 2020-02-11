// Status: ✅

function two_num_sum__UnsortedArray(array, targetSum) {
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
// console.log(two_num_sum__UnsortedArray([3,5,-4,8,11,1,-1,6], 10))