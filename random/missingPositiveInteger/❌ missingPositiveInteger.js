// MAIN FUNCTION
const missingPositiveInt = (array) => {
    // Separate Positve & Negative Integers
    const positiveShift = separate(array)
    console.log(array.slice(positiveShift))
    return findMissingPosInt(array.slice(positiveShift))
    
}

// HELPER FUNCTION(s)
// - 1 - Separate
const separate = (array) => {
    // Var(s)
    let COUNT_nonPositive = 0
    // Swap
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            let temp = array[i]
            array[i] = array[COUNT_nonPositive] 
            array[COUNT_nonPositive]  = temp
            COUNT_nonPositive++
        }
    }
    // Return
    return COUNT_nonPositive
}
// - 2 - Find Missing 
const findMissingPosInt = (array) => {
    for (let i = 0; i < array.length; i++) {
        /* 
            Q: WHY array[i] < array.length ??
            - We are ALWAYS looking for _LOWEST_ POSITIVE int => 1 is our starting point
        */
        if (Math.abs(array[i]) - 1 < array.length && array[Math.abs(array[i]) - 1] > 0){   
            array[Math.abs(array[i]) - 1] = array[Math.abs(array[i]) - 1] * -1
        }
    }
    console.log(array)
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            return i + 1
        }
    }
    return array.length + 1
}

// TESTS //
// console.log(missingPositiveInt([3, 4, -1, 1,2, -3, -6, 7]))
// console.log(missingPositiveInt([-40, 12, 46, -3, 5]))
// console.log(missingPositiveInt([1, 2, 0]))
console.log(missingPositiveInt([1, 2, 0, 5, 4]))