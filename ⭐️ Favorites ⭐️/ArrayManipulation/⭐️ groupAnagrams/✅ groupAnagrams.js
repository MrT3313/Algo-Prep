// BigO
// w = number of words / length of array
// n = length of longest word
// Space: O(wn) => 
// Time: O(wn log(n)) => need to loop through and sort each word => sorting === O(n log(n)) & there are w words

function groupAnagrams(array) {
    // Edge Case
    if (array.length === 0 ) { return -1 }
    // Variables
    result = {}

    // Loigic
    for (const [i, str] of array.entries()) {
    console.log(i, str)
    // -- //
        // Sort current string    
        sorted = str.split('').sort().join('')
        // Is sorted word in hash table
        if (sorted in result) {
            // Add orrigional string to array of strings at sorted key
            result[sorted].push(str)
        } else {
            // Add sorted key with array of orrigional strings
            result[sorted] = [str]
        }
    }
return result}

// -- *** TESTS *** -- //
// -- *** TESTS *** -- //
// -- *** TESTS *** -- //
testArray_1 = ["eat", "tea", "tan", "ate", "nat", "bat"]
testArray_2 = ['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp']
console.log(groupAnagrams(testArray_1))
console.log(groupAnagrams(testArray_2))