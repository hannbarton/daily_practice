import fs from 'fs';
import { setupMaster } from 'cluster';
const input = fs.readFileSync('day-1/input.txt', { encoding: 'utf8' });

let inputArray = input.split('\n').map((ele) => Number(ele))

const resultNumber = inputArray.reduce((acc, ele) => {
    return acc + ele
}, 0)

console.log('part one is ', resultNumber)

const twiceCounter = (arr) => {
    let sum = 0;
    const newSet = new Set();

    for (let i = 0; i < arr.length; i++) {

        if (!newSet.has(sum)) {
            sum += arr[i]
            newSet.add(sum);
        }
        else {
            return sum
        }
    }
}
console.log('input 2 is',twiceCounter(inputArray));
