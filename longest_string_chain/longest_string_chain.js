// - 1 - // ❌
// - 1.1 - //
function longestStringChain(strings) {
    // Variables
    stringChains_hashTable = {}

    // Loop through array of strings
    for (item of strings) {
        console.log(item)

        // Make Initial Data Structure
        stringChains_hashTable[item] = {
            "nextString": '',
            "maxChainLength": 1
        }
        console.log(stringChains_hashTable)

        // Sort Strings PARAMETER (not the hash table) by length smallest to largest
        strings.sort((a,b) => a.length - b.length)
        console.log(strings)

        // Loop and Call
        for (string of strings) {
            findLongestStringChain(string, stringChains_hashTable)
        }
    }
}

// - 1.2 - //
function findLongestStringChain(string, stringChains_hashTable) {
    // loop through the index's of string
    for (i in string) {
        console.log(i)

        // get current version of the smaller string
        smallerString = getSmallerString(string, i)
        console.log(smallerString)
        console.log(stringChains_hashTable)

        // If Conditional -- is smaller string in hash table
        if (stringChains_hashTable[smallerString]) {
            console.log('FUCK IT')
            console.log(stringChains_hashTable[smallerString])

            tryUpdateLongestStringChain(string, smallerString, stringChains_hashTable)
        }
    }
}

// - 1.3 - //
function getSmallerString(string, index) {
    return string.slice(0, index) + string.slice(index +1)
}

// - 1.4 - //
function tryUpdateLongestStringChain(currentString, smallerString, stringChains) {
    console.log(currentString)
    smallerStringChainLength = stringChains[smallerString]["maxChainLength"]
    currentStringChainLength = stringChains[currentString]["maxChainLength"]
}

longestStringChain(['abde','abc','abd','abcde','abe','ae','1abde','abcdef'])

