// Big-O = O(n^2) because of the nested loop

function bublleSort(arr) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
}

const arr = [8, 20, -2, 4, -6]
bublleSort(arr)
console.log(arr)