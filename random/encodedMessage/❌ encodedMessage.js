/* 
    input: '111'

    1. Turn to ARRAY of DIGITS => [1,1,1]
    2. Loop throug all possible windows
        w = 1 => [ 
            result_1 === [ [1], [1], [1] ] => [ 'aaa' ]
        ]
        w = 2 => [ 
            result_2.1 = [1, 1], [1] => [11, 1] => [ 'k', 'a' ] => [ 'ka' ]
            result_2.2 = [1], [1, 1] => [1, 11] => [ 'a', 'k' ] => [ 'ak' ]        
        ]
        w = 3 => {
            result_2 = [1, 1, 1] => [111] => false                      *NOTE* numbers > 26 can not be encoded
        }
    3. 
*/
const encodedMessage = (str) => { 
    // Variables
    let result = []
    const encoding = {
        1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "g", 8: "h", 9: "i", 10: "j",
        11: "k", 12: "l", 13: "m", 14: "n", 15: "o", 16: "p", 17: "q", 18: "r", 19: "s", 20: "t", 
        21: "u", 22: "v", 23: "w", 24: "x", 25: "y", 26: "z" 
    }

    // Helpers
    const getChars = arr => {
        console.log(arr)

        return arr.map(numArray => {
            let digit = numArray.join('')
            if (digit >= 1 && digit <= 26) {
                return encoding[digit]
            }
        })
    }

    // Edge Case(s)
    if (str.length === 0 ) { return false}
    if (str.length === 1 ) { return [ encoding[str] ]}
    
    // Main Logic
    // - 1 - // Get Array of Digits
    const digits = Array.from(str).map(Number)

    console.log(str)

    // Loop Through Window Options
    // *NOTE* because digits > 26 cannot be encoded the window can't be > 2
    for (let i = 1; i <= 2; i++) {
        // Variables
        let copyDigits = digits.slice()
        console.log(copyDigits)
        console.log(i)

        // Create SubProblem
        let subArray = []

        // Get All Window Digits
        do {
            console.log(`i: ${i}`,copyDigits)
            let digit = copyDigits.splice(0, i)
            console.log(`i: ${i}`,copyDigits)
            console.log(`i: ${i}`, digit)
            subArray.push(digit)
            
        } while (copyDigits.length !== 0)
        
        // Get Chars For Found Digit Permutations
        let charsArray = getChars(subArray)

        // Push Character Combinations to Final Result
        result.push(charsArray.join(''))
    }

    // Return
    return result
}


// TESTS // 

// console.log(encodedMessage(''))
// console.log(encodedMessage('1'))
// console.log(encodedMessage('12'))
// console.log(encodedMessage('123'))
// console.log(encodedMessage('1234'))
console.log(encodedMessage('111')) // ['aaa', 'ka','ak']











// ------------------------------------------------- //
// ------------------------------------------------- //
// ------------------------------------------------- //
// ------------------------------------------------- //

// for (let i = 2; i <= str.length; i++) {
//     // Add subProblem Array
//     // result.push([])
//     console.log(result)

//     // Get Digits
//     let oneDigit = digits.slice(i - 2, i - 1).join('')
//     console.log(oneDigit)
//     let twoDigits = digits.slice(i - 2, i).join('')
//     console.log(twoDigits)

//     // Check for encoding
//     if (oneDigit >= 1) {
//         // Get Character
//         let oneDigitChar = encoding[oneDigit]
//         // Add Character to subProblem
//         // result[i - 2].push(oneDigitChar)
//         result.push(oneDigitChar)
//         console.log(result)
//     }
//     if (twoDigits <= 26) {
//         // Get Character
//         let twoDigitChar = encoding[twoDigits]
//         // Add Character to subProblem
//         // result[i - 2].push(twoDigitChar)
//         result.push(twoDigitChar)
//         console.log(result)
//     }
    
//     // Join subProblem Array
//     // result[i - 2] = result[i - 2].join('') 
//     console.log(result)

// }

// // Return
// return result


// ------------------------------------------------- //
// ------------------------------------------------- //
// ------------------------------------------------- //
// ------------------------------------------------- //

// const encodedMessage = (str) => {
//     // Variables
//     console.log(digits)
//     let result = []

//     // Helper
//     const getCharacters = array => {
//         return array.map(num => {
//             return character = encoding[num]
//         })
//     }

//     // Main Logic
//     for (let i = 0; i < digits.length; i++) {
//         // Variables
//         let copyDigits = digits.slice();        
//         let windowSize = i + 1;                     

//         // Add empty array for this window size subset
//         result.push([])
//         console.log(result)

//         do {
//             console.log(copyDigits)
//             console.log(`i:${i}`, copyDigits.length, windowSize)
//             if (copyDigits.length < windowSize) {
//                 console.log('HERE')
//                 console.log(i)
//                 let newData = copyDigits.splice(0,windowSize)
//                 console.log(newData)
//                 let chars = getCharacters(newData)
//                 console.log(chars)
//                 result[i][0].push(chars[0])
//                 console.log(result)
//                 // exit()
//             } else {
//                 console.log(`i: ${i} --`, copyDigits)
//                 // console.log(copyDigits.slice(i,windowSize+1))
//                     let newData = copyDigits.splice(0,windowSize)
//                     console.log(newData)
//                     let chars = getCharacters(newData)
//                     console.log(chars)
//                     result[i].push(chars)                 
//             }
//         } while (copyDigits.length !== 0)

//         let join = result[i].join('')
//         result[i] = join
//         console.log(result)

//         // while (copyDigits.length !== 0) {
//         // // for (let j = 0; j < 5; j++) {
//         //     // if (copyDigits.length !== 0) {
//         //         if (copyDigits.length < windowSize) {
//         //             console.log('HERE')
//         //             exit()
//         //         } else {
//         //             let chunk = copyDigits.splice(i,windowSize+1); 
//         //             console.log(chunk)
//         //             subResult.push(encoding[chunk])
//         //             console.log(copyDigits.length)
//         //         }
//         // }
//         // let combinedSubstring = subResult.join('');         console.log(combinedSubstring); console.log(typeof combinedSubstring)
//         // result.push(combinedSubstring)
//         // console.log(result)
//         // // Debbug
//         // // exit()
//     }
// }
    // Main Logic
    //     let windowSize = i
        
    //     let copyDigits = digits.slice()
    //     let subResult = []

    //     // while (copyDigits.length !==0) {
    //     //     let chunk = copyDigits.splice(i,windowSize)
    //     //     console.log(chunk)
    //     // }
    // }
