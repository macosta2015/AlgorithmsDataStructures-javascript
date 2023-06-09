//Worst case - O(n^2)
//Average case -O(nlogn)
//It is really unlikely that you will sort and already sorted algorithm.

function quickSort(arr) {
    console.log('This is the current array value: ' + arr)
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    console.log('This is the pivot: ' + pivot)
    let left = []
    let right = []

    for (let i = 0; i < arr.length - 1; i++) {
        // console.log('This is the arr[i]: ' + arr[i])
        if (arr[i] < pivot) {
            left.push(arr[i])
            console.log('Left array: ' + left)
        } else {
            right.push(arr[i])
            console.log('Right array: ' + right)
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

//Sorting the below array: 
const arr = [8, 20, -2, 4, -6]
console.log(quickSort(arr))