// Big O
// n = length of string
// Space: O(1)
// Time:  O(n)

/* Implementation Notes 
    Space => O(1) because you are only holding two variables (& not using callstack like recursion problem)
*/

function palindrome_check__indexCheck(string) {
    // Variables
    let leftIndex = 0
    let rightIndex = string.length - 1
    
    // Logic
    while (leftIndex < rightIndex) {
        if (string[leftIndex] !== string[rightIndex]) { return false }
        
        // Increment
        leftIndex += 1
        rightIndex -= 1
    }
return true}

// -- *** TESTS *** -- //
// -- *** TESTS *** -- //
// -- *** TESTS *** -- //
console.log(palindrome_check__indexCheck('1234'))
console.log(palindrome_check__indexCheck('abcba'))
console.log(palindrome_check__indexCheck('racecar'))