const reverse_byWord = str => str.split(' ').reverse()
const reverse_byCharacter = str => str.split('').reverse()
const reverse_byCharacter_removeSpaces = str => str.split('').reverse().filter(item => item !== ' ')

// TEST //
console.log(reverse_byWord('I droped my ice cream'))
console.log(reverse_byCharacter('I droped my ice cream'))
console.log(reverse_byCharacter_removeSpaces('I droped my ice cream'))