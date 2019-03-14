// if you can see this, its working
//Exact Change: Given an amount of money in dollars, return an array with the exact change required.
//Sample Input: $27.37 Output: [$20, $5, $1, $1, $0.25, $0.10, $0.01, $0.01]

function getChange(change) {
	let remainingChange = Number(change.slice(1));
	let yourChange = [];
	changeArray = [100, 50, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
	for (let i = 0; i < changeArray.length; i++) {
		while (changeArray[i] <= remainingChange) {
			yourChange.push(`$${changeArray[i]}`);
			remainingChange = (remainingChange - changeArray[i]).toFixed(2);
		}
	}
	return yourChange;
}

console.log(getChange("$429.09"));
