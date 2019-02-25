const prime = (num) => {
    if (num < 2) {
        return false
    }
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true;
}


const primeFactors = (num) => {
    let arr = []

    if (num < 2) {
        return arr;
    }
    for (let i = 2; i < num; i++) {
        console.log(i)
        while (prime(i) && num % i === 0) {
            num = num/i
            if (!arr.includes(i)) {
                arr.push(i)
            }
        }
    }
    if (prime(num) && !arr.includes(num)) {
        arr.push(num)
    }
    return arr;
}

console.log(primeFactors(30))
// console.log(prime(13))
