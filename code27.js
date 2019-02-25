// https://www.algoexpert.io/questions/Caesar%20Cipher%20Encryptor

// given a non-empty string of lowercase letters and a non-neg integer value representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key. Note that letters should 'wrap' around the alphabet; in t other words, the letter 'z' shifted by 1 returns the letter 'a'

// input: xyz, 2
// output: zab

function caesarCipherEncryptor(string, key) {
    // % 25
    // loop over each element in the string
    // get the indexOf for the element
    // add the key to the element
    // return new element
    // concat the new element into return Str= ""

    let newStr = '';
    let rot = key % 26
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < string.length; i++) {
        let AlphI = alphabet.indexOf(string[i]);
        let newI = (AlphI + rot) % 26
        newStr += alphabet[newI]

    }
    return newStr
}


console.log(caesarCipherEncryptor('xyz', 2))

