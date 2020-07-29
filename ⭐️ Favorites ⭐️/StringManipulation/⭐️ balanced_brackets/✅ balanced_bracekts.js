function balancedBrackets(STRING_brackets, debug=false) {
    // Variables
    openingBrackets = '([{'
    closingBrackets = ')]}'
    matchingBrackets = {
        ")": "(",
        "]": "[",
        "}": "{",
    }
    STACK = []

    // Turn bracket STRING to ARRAY 
    SPLIT_string = STRING_brackets.split('')
    if (debug) { console.log(SPLIT_string) }

    // Logic
    // 1 - Loop through brackets 
    for (bracket of SPLIT_string) {
        // 2 - Conditional
        // 2.1 - Opening Bracket => Add to STACK
        if (openingBrackets.includes(bracket)) {
            if (debug) { console.log('- OPENING Bracket -') }

            STACK.push(bracket)
        // 2.2 - Closing Bracket => Check for a match
        } else if (closingBrackets.includes(bracket)) {
            if (debug) { console.log('- CLOSING Bracket -') }
            
            // Edge Case
            if (STACK.length === 0) { return false }

            // Debug Check
            if (debug) { 
                console.log(bracket)
                console.log(STACK) 
                console.log(STACK[STACK.length -1])
            }

            // Matching Bracket Check
            if (STACK[STACK.length -1] === matchingBrackets[bracket]) {
                if (debug) { console.log('✅ - WE HAVE A MATCH!') }
                STACK.pop()
            } else {
                if (debug) { console.log('❌ - NO MATCH') }
                return false
            }
        }
    }
    // RETURN 
    // If we get to this point without returning false the last check is to make sure there are no left over brackets
    return STACK.length === 0
}

// -- *** TESTS *** -- //
// -- *** TESTS *** -- //
// -- *** TESTS *** -- //

// Setup Input
// - 1 - TRUE
STRING_brackets_1 = '({[]}){()}'
STRING_brackets_2 = '[()]{}{[()()]()}'
STRING_brackets_3 = '([{]})'
STRING_brackets_4 = '[(])'

// Call Function
console.log(balancedBrackets(STRING_brackets_1, debug=true))
console.log(balancedBrackets(STRING_brackets_2))
console.log(balancedBrackets(STRING_brackets_3))
console.log(balancedBrackets(STRING_brackets_4))
