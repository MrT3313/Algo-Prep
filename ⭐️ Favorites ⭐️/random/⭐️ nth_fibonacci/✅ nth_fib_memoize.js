// TimeComplexity = O(n) => Only need to calculate value once for each `n`
// SpaceComplexity = O(n) => Space on the call stack

function nth_fib_memoize(n) {
    // Data
    memoize = {
        1: 0,
        2: 1
    }
    // Logic
    if (memoize.includes(n)) { return memoize[n] } 
    else {
        memoize[n] =  nth_fib_memoize(n - 1) + nth_fib(n - 2)
        return memoize[n]
    }
}

console.log(nth_fib(6))