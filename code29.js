// given two strings, see if 1 is a permuation of the other

const isPerm = (one, two) => {
	// sort the strings first;

	let str1 = one.split("").sort();
	let str2 = two.split("").sort();

	for (let i = 0; i < str1.length; i++) {
		if (str1[i] !== str2[i]) {
			return false;
		}
	}
	return true;
};

// console.log(isPerm('tacocat', 'catcato'))

// (function call() {
// 	console.log("this worked");
// })();

let a = 3;
function addTwo(x) {
	let ret = x + 2;
	return ret;
}
let b = addTwo(a);
console.log(b);
