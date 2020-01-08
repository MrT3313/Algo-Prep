
// - 1 - // ❌
function smallestDifference__NAIVE( arrayOne, arrayTwo) {
    console.log(arrayOne)
    console.log(arrayTwo)

    // Variables
    let l_pointer = 0
    let r_pointer = 0
    let result = []

    // 


return result}
// smallestDifference__NAIVE([-1, 5, 10, 20, 28, 3],[26, 134, 135, 15, 17]) // [28, 26]

// - 2 - // ✅
function smallestDifference(arrayOne, arrayTwo) {
    
    // SORT 
    arrayOne.sort((a,b) => a - b)
    arrayTwo.sort((a,b) => a - b)
    
    // Variables
    l_pointer = 0
    r_pointer = 0
    smallest = Number.POSITIVE_INFINITY
    diff = Number.POSITIVE_INFINITY
    smallestPair = []
    
    // While
    while (
        l_pointer < arrayOne.length && 
        r_pointer < arrayTwo.length
    ) {
        l_num = arrayOne[l_pointer]
        r_num = arrayTwo[r_pointer]
        
        diff = Math.abs(r_num - l_num)
        
        if (smallest > diff) {
            smallest = diff
            smallestPair = [l_num, r_num]
        }
        
        if (l_num < r_num) {
            l_pointer += 1
        } else if (l_num > r_num){
            r_pointer += 1
        } else {
            smallestPair = [l_num, r_num]
            return smallestPair
        }
    }
return smallestPair}

// console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]))
smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])



