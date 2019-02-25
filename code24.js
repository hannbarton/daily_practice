// given a sorted array and a target number, return the first and last index of where that target number shows up in the array
// if the number is not contained in the array, return [-1,-1]

// input [0,1,21,33,33,33,33,45,45,45,45,45,45,61,71,73], 45
//                  ^      *
//        L               mid                          R
// output [4,9]


function searchForRange(arr, target) {
    return helper(arr, target, 0, arr.length - 1, [-1,-1])
}

function helper(arr, target, left, right, range) {
    const mid = Math.floor((right + left)/2)

    if (arr[mid] < target && left < right) {
        return helper(arr, target, mid + 1, right, range)
    }
    if (arr[mid] > target  && left < right) {
        return helper(arr, target, left, mid - 1, range)
    }
    if (arr[mid] === target) {
        let firstIndex = mid;
        let lastIndex = mid;
        while (arr[firstIndex] === target || arr[lastIndex] === target) {
            if (arr[firstIndex] === target) {
                firstIndex--;
            }
            if (arr[lastIndex] === target) {
                lastIndex++;
            }
        }
            return [firstIndex +1, lastIndex -1];
    } else {
        return [-1, -1];
    }
}


console.log(searchForRange([0,1,21,33,45,45,45,45,45,45,61,71,73], 45))
