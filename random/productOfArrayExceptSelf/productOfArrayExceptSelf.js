// V2 - No Division
const noDivision = (array) => {
    // Setup
    length = array.length
    L = new Array(length).fill(0);
        L[0] = 1            // Since there are no elements to the left @ [0]
    R = new Array(length).fill(0);
        R[length - 1] = 1   // Since there are no elements to the right @ [length -1]
    result = new Array(length).fill(0);
    
    // Main Logic
    // LEFT
    for (let i = 1; i < array.length; i++) {
        console.log(i)
        console.log(array)
        console.log(L[i - 1])
        console.log(array[i - 1])

        L[i] = array[i - 1] * L[i - 1]
        
        console.log(L)
    }
    // RIGHT
    for(let i = array.length - 2; i >= 0; i--) {
        console.log(i)
        console.log(array)
        console.log(R)
        console.log(R[i + 1])
        console.log(array[i + 1])

        R[i] = array[i + 1] * R[i + 1]
        
        console.log(R)
    }
    // RESULT
    for (let i = 0; i < array.length; i++) {
        result[i] = L[i] * R[i]
    }
    return result
}
// V1 
const productOfArrayExceptSelf = (array) => {
    totalProduct = array.reduce( (acc, currentVal) => acc * currentVal)
    return array.map((item, i) => totalProduct / item)
}
// TESTS //
// TESTS //
// TESTS //
console.log(productOfArrayExceptSelf([3, 2, 1]))
console.log(productOfArrayExceptSelf([1, 2, 3, 4]))
console.log(noDivision([3, 2, 1]))
console.log(noDivision([1, 2, 3, 4]))