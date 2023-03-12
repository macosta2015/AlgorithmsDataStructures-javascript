function factorial(n) {
    let result = 1

    for (let i = 2; i <= n; i++) {
        console.log('Inside the for loop', i)
        result = result * i;
        console.log('Inside the result', result)

    }
    return result
}

// console.log(factorial(0))
// console.log(factorial(1))
// console.log(factorial(2))
console.log(factorial(4))
// console.log(factorial(4))
// console.log(factorial(5))