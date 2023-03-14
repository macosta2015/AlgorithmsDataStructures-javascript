// Big-O = O(n) time complexity, as the number of the size increases, so does the search.
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return ("None")
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10))
console.log(linearSearch([-5, 2, 10, 4, 6], 6))
console.log(linearSearch([-5, 2, 10, 4, 6], 20))