function isPowerOfTwo(n) {
    if (n < 1) {
        return false
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            console.log(n)
            return false
        }
        n = n / 2
    }
    return true
}

console.log(isPowerOfTwo(17))
// console.log(isPowerOfTwo(2))
// console.log(isPowerOfTwo(5))