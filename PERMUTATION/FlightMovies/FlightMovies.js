const flightMovies = (movieLengths, target) => {
    // Base Case
    if (movieLengths.length < 2) { return false }

    // Variable
    data = {}

    // Logic
    for (let i = 0; i < movieLengths.length; i++) {
        let newTarget = target - movieLengths[i]

        if (data[newTarget]) { 
            return true 
        } else {
            data[movieLengths[i]] = i
        }
    } 
    return false
}

// -- *** TESTS *** -- //
// -- *** TESTS *** -- //
// -- *** TESTS *** -- //

target = 160
test_true = [20, 40, 80, 130, 30]
test_true_edgeCase_dupVal = [20, 80, 40, 80]
test_false = [60, 30, 20]
test_false_edgeCase_length = [60]

console.log(flightMovies(test_true, target))
console.log(flightMovies(test_true_edgeCase_dupVal, target))
console.log(flightMovies(test_false, target))
console.log(flightMovies(test_false_edgeCase_length, target))