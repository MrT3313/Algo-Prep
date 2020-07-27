function balancedBrackets(STRING_brackets, debug=false) {
    // Variable Setup
    openingBrackets = '([{'
    closingBrackets = ')]}'
    matchingBrackets = {
        ")": "(",
        "]": "[",
        "}": "{",
    }
    STACK = []

    // STRING => ARRAY
    SPLIT_string = STRING_brackets.split('')
    if (debug) { console.log(SPLIT_string) }

    // LOGIC
    // 1. Loop through brackets 
    for (bracket of SPLIT_string) {
        // 2. Conditional
            // Opening Bracket => Add to STACK
            if (openingBrackets.includes(bracket)) {
                if (debug) { console.log('- OPENING Bracket -') }

                STACK.push(bracket)
            // Closing Bracket
            } else if (closingBrackets.includes(bracket)) {
                if (debug) { console.log('- CLOSING Bracket -') }
                
                // Edge Case
                // - Nothing in STACK => nothing to match CLOSING BRACKET to
                if (STACK.length === 0) { return false }

                // Matching Bracket Check
                if (debug) { 
                    console.log(bracket)
                    console.log(STACK) 
                    console.log(STACK[STACK.length -1])
                }
                if (STACK[STACK.length -1] === matchingBrackets[bracket]) {
                    if (debug) { console.log('✅ - WE HAVE A MATCH!') }
                    // - yes - REMOVE STACK[-1] & move onto next bracket in input string
                    STACK.pop()
                } else {
                    console.log('❌ - NO MATCH')
                    // - no - return False
                    return false
                }
            }
    }
    // RETURN 
    // If we get to this point without returning false the last check is to make sure there are no left over brackets
    return STACK.length === 0
}

// --- *** --- *** --- //
//        CHECK        // 
// --- *** --- *** --- //

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
