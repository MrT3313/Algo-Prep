1. nth_fib_recursive
    - NOT GOOD time complexity => 2^n
        - memoization fixes this => only calculate a a fib value once for each `n`
    ```
                           fib(6)
                          /      \
                    fib(5)        fib(4)
                    /     \        /     \
              fib(4)*   fib(3)    fib(3)*  fib(2)
              /  \       /   \            |
        fib(3)* fib(2)* fib(2)* fib(1)  etc etc ... 
              /\
        fib(2)* fib(1)*
        
        * : Duplicate Call
    ```
    - Space Complexity => O(n) => due to call spaces taken up on call stack