const checkperm = (str) => {
    let low = 0
    let high = str.length - 1

    while(low < high) {
        if (str[low] === str[high]) {
            low++
            high--
        }
        else {
            return false
        }
    }
    return true;

}

console.log(checkperm('tacocat'))
console.log(checkperm('hanna'))
