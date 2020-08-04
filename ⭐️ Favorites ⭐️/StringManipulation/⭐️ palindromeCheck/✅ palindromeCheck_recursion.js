// Big O
// n = length of string
// Space: O(n)
// Time: O(n)

/* Implementation Notes 
    Time Complexity: At most we will only be checking half of the characters but O(n / 2) is still O(n)
    Space Complexity: DONT forget about the call stack! n / 2 calls => O(n/2) => O(n) 
*/

function palindrome_check__recursion(string, i = 0) {
    let endIdx = string.length - 1 - i

    if(i >= endIdx) { return true }                     // Base Case => @ midding or overlaped
    if (string[i] !== string[endIdx]) { return false }  // Main Logic => check for matching chars

    return palindrome_check__recursion(string, i + 1)
}

// -- *** TESTS *** -- //
// -- *** TESTS *** -- //
// -- *** TESTS *** -- //
console.log(palindrome_check__recursion('1234'))
console.log(palindrome_check__recursion('abcba'))
console.log(palindrome_check__recursion('racecar'))