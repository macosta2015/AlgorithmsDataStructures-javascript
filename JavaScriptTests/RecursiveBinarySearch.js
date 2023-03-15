// Big-O = O(logn) The input size is reduced by half every time the function is called. 


function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[middleIndex]) {
        return middleIndex
        //In the case the middleIndex matched the target
    }

    if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1)
        //If the left side is smaller, then we need to sorroud the left most side (ledtIndex) and then sorround the middle -1 (middleIndex - 1)
    }
    else {
        return search(arr, target, middleIndex + 1, rightIndex)
        //If the right side is bigger, then we need to sorroud the righ most side (rightIndex) and then sorround by middle + 1 (middleIndex + 1)
    }

}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10))
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6))
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20))

