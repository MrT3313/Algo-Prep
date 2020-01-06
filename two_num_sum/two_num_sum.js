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
console.log(two_num_sum__RegularArray([3,5,-4,8,11,1,-1,6], 10))

// - 3 - // ❌
// TODO: Try to actuallyl implement a HASH TABLE vs a regular JS array
function two_num_sum__HashTable(array, targetSum) {}
// console.log(two_num_sum__HashTable([3,5,-4,8,11,1,-1,6], 10))
