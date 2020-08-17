function insertionSort(array) {
    // Loop through array => starting at array[1]
    for (let i = 1; i < array.length; i++) {
        // Reset backtracking index
        j = i
        // Backtracking check loop
        while (j > 0 && array[j] < array[j - 1]){
            swap(j, j-1, array)
            j -= 1
        }
    }
// Return
return array}

function swap(i, j, array) {
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

// -- *** TESTS *** -- //
// -- *** TESTS *** -- //
// -- *** TESTS *** -- //
console.log(insertionSort([8,5,2,9,5,6,3]))