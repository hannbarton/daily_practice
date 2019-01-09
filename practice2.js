// if you can see this its working
// [12, 3, 1, 2, -6, 5, -8, 6], 0
// [-8, -6, 1, 2, 3, 5, 6, 12]

//output => [-8, 2, 6], [-8, 3, 5], [-6, 1, 5]

function threeNumberSum(arr, target) {
    let allSolutions = [];
    let sorted = arr.sort((a,b) => a-b);
    for(let i = 0; i < sorted.length - 2; i++) {
      let l = i + 1;
      let r = sorted.length -1;
      while (l < r) {
        if (sorted[i] + sorted[r] + sorted[l] === target) {
                  let solution = [sorted[i], sorted[l], sorted[r]];
          allSolutions.push(solution);
          l++;
          r--;
        }
        else if (sorted[i] + sorted[r] + sorted[l] < target) {
          l++;
        }
        else {
          r--;
        }
      }
    }
      console.log(allSolutions);
    return allSolutions;
}




//What is a string? Is it immutable?

let x = 'abc';
x.replace('b', 'd');
let y = x.replace('b', 'd');

console.log(x)  // 'abc'
console.log(y)  // 'adc'


//What are some ways to empty an array in Javascript?
var arrayList =  ['a','b','c','d','e','f'];

// Method 1
// arrayList = [];

// Method 2
// arrayList.length = 0;

// Method 3
// arrayList.splice(0, arrayList.length);

// Method 4
// while(arrayList.length){
//   arrayList.pop();
// }

//What does "use strict" do?

// The "use strict" literal is entered at the top of a JavaScript program or at the top of a function and it helps you write safer JavaScript code by throwing an error if a global variable is created by mistake. For example, the following program will throw an error:
function doSomething(val) {
  "use strict";
  x = val + 10;
}
// It will throw an error because x was not defined and it is being set to some value in the global scope, which isn't allowed with "use strict" The small change below fixes the error being thrown:
function doSomething(val) {
  "use strict";
  var x = val + 10;
}

// How would you add your own method to the Array object so the following code would work?

var arr = [1, 2, 3, 4, 5];
var avg = arr.average();
console.log(avg);

Array.prototype.average = function() {
  // calculate sum
  var sum = this.reduce(function(prev, cur) { return prev + cur; });
  // return sum divided by number of elements
  return sum / this.length;
}

//How would you check if a number is an integer?

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt
