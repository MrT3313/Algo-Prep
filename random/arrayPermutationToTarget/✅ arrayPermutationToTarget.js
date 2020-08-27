const arrayPermToTarget = (array, target) => {
    // Edge Case
    if (array.length < 2) { return false }
    
    // Variables
    let data = new Set()

    // Main Logic
    for (let i = 0; i < array.length; i++) {
        let newTarget = target - array[i]

        if (data.has(newTarget)) {
            return true
        } else {
            data.add(array[i])
        }
    }
    return false
}

console.log(arrayPermToTarget([10], 10))
console.log(arrayPermToTarget([10, 2], 12))
console.log(arrayPermToTarget([10, 15, 3, 7], 17))
console.log(arrayPermToTarget([80, 15, 80, 7], 160))