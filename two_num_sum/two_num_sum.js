function two_num_sum_NAIVE (array, targetSum) {
    // Result to Return
    let result = undefined

    // First Loop 
    array.forEach((element, index) => {
        console.log(`${index} : ${element}`)

        // Second Loop
        for (let i = array.indexOf(element) +1; i < array.length; i++ ) {
            console.log(array[i])

            // If Conditional
            console.log(element)
            console.log(array[i])
            console.log(element, array[i])

            if (element + array[i] === targetSum) {
                console.log([element, array[i]])
                result = [element, array[i]]
            }
        }
    });
return result}

console.log(two_num_sum_NAIVE([3,5,-4,8,11,1,-1,6], 10))