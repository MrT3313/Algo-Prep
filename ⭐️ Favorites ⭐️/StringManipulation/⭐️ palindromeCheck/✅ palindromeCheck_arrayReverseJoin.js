// Big O
// n = length of string 
// Space: O(1)
// Time: O(n)

/* Implementation Notes 
    The time complexity for a .split() / .join() method is O(n + k) where k is the character separator. 
    In this case there is no specific character separator and therefore it is splitting and joining on 
    every character or what is in this cast already denoted as n. 
*/

function palindrome_check__arrayReverse(string) {
    // Reverse String                                       // O(n)
    let reversed = string.split('').reverse().join('')              // split = O(n) --- reverse = O(n) --- join = O(n)

    // Conditional & Return
    return string === reversed                                  // O(1)
}

// -- *** TESTS *** -- //
// -- *** TESTS *** -- //
// -- *** TESTS *** -- //
console.log(palindrome_check__arrayReverse('1234'))
console.log(palindrome_check__arrayReverse('abcba'))
console.log(palindrome_check__arrayReverse('racecar'))