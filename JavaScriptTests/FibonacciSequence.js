//The Fibonacci position's of F(0),F(1), and F(2) are equal to 1

function fibonacci(n) {
    const fib = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}

//Testing the code
console.log(fibonacci(2))
console.log(fibonacci(3))