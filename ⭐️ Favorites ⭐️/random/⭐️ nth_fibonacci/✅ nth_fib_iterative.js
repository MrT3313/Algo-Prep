// TimeComplexity = O(n)
// SpaceComplexity = O(1)
function nth_fib_iterative(n) {
    // Variables
    lastTwo = [0, 1]
    counter = 3
    // Logic
    while (counter <= n) {
        nextFib = lastTwo[0] + lastTwo[1]
        lastTwo[0] = lastTwo[1]
        lastTwo[1] = nextFib
        counter += 1
    }
    // Return
    return ( n > 1 ? lastTwo[1] : lastTwo[0] )
}
console.log(nth_fib_iterative(2))
console.log(nth_fib_iterative(4))
console.log(nth_fib_iterative(6))
