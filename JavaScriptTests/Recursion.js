//The Fibonacci position's of F(0),F(1), and F(2) are equal to 1
function recursiveFibonacci(n) {
    if (n < 2) {
        return n
    }
    console.log('n before recursion: ' + n)
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(4))