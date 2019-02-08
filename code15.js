//Number Swapper: Write a function to swap a number in place (that is, without temporary vari- ables)

const numswap = (one, two) => {
    one = one + two;
    console.log('add', one)

    two = two - one
    console.log('sub', two)

    one = one + two
    console.log(one)
    two = Math.abs(two)
    console.log(two)

}

// console.log(numswap(12, 13))
const bit = (one, two) => {
    two = one^two // difference
    // 101
    // 110
    // 011
    one = two^one
    // 101
    // 011
    // 110
    console.log('one',one)
    two = one^two
    // 110
    // 011
    // 101
    console.log('two', two)

}
console.log(bit(101,110))

// 5 and 6

//  1 + 0 + 4
// 0 + 2 + 4
