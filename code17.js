const countdown = (num) => {
    let result = ''
    let other = num

    for (let i = num; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            result += '*'
        }
        result += '\n'
    }
    return result
}

console.log(countdown(5))
