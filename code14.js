// String Rotation: Assume you have a method isSubstring which checks if one word is asubstring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g.,"waterbottle"is a rotation of"erbottlewat").
// Hints: #34, #88, #104

const isSubstring = (s1, s2) => {

    let obj = {};

    if (s2.length > s1.length) {
        return false
    }
    else {
        for (let i = 0; i < s2.length; i++) {
            if (s1.includes(s2[i])) {
                let idx = s1.indexOf(s2[i])

                obj[idx] = s2[i]
            }
            else {
                return false
            }
        }
    }
    return true
}


console.log(isSubstring('waterbottle', 'erbottlewat'))
console.log(isSubstring('waterbottleeeeeeeee', 'rbottlewatp'))
    //                                  ^
