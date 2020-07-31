// TimeComplexity = O(2^n)
// SpaceComplexity = O(n)

function nth_fib(n) {
    // Base Case(s) 
    if (n === 1) { return 0 }
    else if (n === 2) { return 1 }
    // Logic
    else {
        return nth_fib(n - 1) + nth_fib(n - 2) 
    }
}

console.log(nth_fib(2))