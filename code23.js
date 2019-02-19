// given a array of numbers, see how many times it was rotated

function rotate(arr) {
    let min = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[min]) {
            min = i
        }
    }
    return min
}

console.log(rotate([8,9,10,2,5,6]))
console.log(rotate([2,5,6,8,9,10]))
