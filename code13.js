const makeanagram = (ay,by) => {
    let a = ay.split('')
    let b = by.split('')

    let obj = {}
    let counter = 0

    if (a.length <= b.length) {
        for (let i = 0; i < a.length; i++) {
            if (b.includes(a[i])) {
                if (obj[a[i]]) {
                    obj[a[i]]++
                }
                else {
                    obj[a[i]] = 1
                }
            }
        }
    }
    else {
        for (let i = 0; i < b.length; i++) {
            if (a.includes(b[i])) {
                if (obj[b[i]]) {
                    obj[b[i]]++
                }
                else {
                    obj[b[i]] = 1
                }
            }
        }
    }
    for (let each in obj) {
        if (obj[each]) {
            let num = obj[each]
            counter += num
        }
    }
    return (a.length - counter) + (b.length - counter)
}

console.log(makeanagram('abc', 'cde'))
console.log(makeanagram('shwoman', 'woman'))
