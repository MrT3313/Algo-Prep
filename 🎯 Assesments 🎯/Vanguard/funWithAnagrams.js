function funWithAnagrams(text) {
    // Edge Case
    if (text.length <= 1) { return text}

    // Variables
    let data = new Set()
    let result = []
    
    // Main Logic
    text.forEach(item => {
        let uniqueString = item.split('').sort().join('')
        if (!data.has(uniqueString)) {
            data.add(uniqueString)
            result.push(item)
        } 
    })
    return result.sort()
}

console.log(funWithAnagrams(['code', 'doce', 'ecod', 'framer', 'frame']))
console.log(funWithAnagrams(['code', 'aaagmnrs', 'anagrams', 'doce']))
console.log(funWithAnagrams(['poke', 'poke', 'okpe', 'ekop']))