// BigO
// N = length of array
// Space: O(1) => Single Array & Single Temp Variable 
// Time: O(n^2) => Looping through array multiple times

function bubble_sort(array, type = 'asc' ) {                                // O(n^2)
    // Variables                                                                // ---- | O(1)
    isSorted = false                                                                // O(1) | ^ 
    counter = 0                                                                     // O(1) | ^

    // Logic                                                                    // ---- | O(n) * O(n) => O(n^2) 
    while (!isSorted) {                                                             // O(n)
        isSorted = true // @ start of loop assume it is sorted                          // O(1)
        for (i = 0; i < array.length - counter; i++) {                                  // O(n) | O(n) * (O(1) + O(1) + O(1)) => O(n)
            if (type === 'asc') {                                                           // O(1) => O(1)
                if (array[i] > array[i + 1]) {                                                  // O(1) ^
                    isSorted = false                                                            // O(1) ^
                    swap(i, i + 1, array)
                }
            } else if (type === 'desc') {                                                   // O(1) => O(1)
                if (array[i] < array[i + 1]) {                                                  // O(1) ^
                    isSorted = false                                                            // O(1) ^
                    swap(i, i + 1, array)
                }
            } else {
                throw 'Invalid Parameters'                                                  // O(1)
            }
        }
        counter += 1                                                                    // O(1) |
    }
// Return
return array}

function swap(i, j, array) {
    // Variables 
    temp = array[i]         // save one before overwriting it

    // Logic
    array[i] = array[j]
    array[j] = temp

// Return
return array}

// -- *** TESTS *** -- //
// -- *** TESTS *** -- //
// -- *** TESTS *** -- //
unsortedArray = [2,5,8,4,3]
ascending_sort = bubble_sort(unsortedArray)
console.log(sortedArray)
descending_sort = bubble_sort(unsortedArray, 'desc')
console.log(descending_sort)