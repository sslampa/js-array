//Purpose: Function that finds highest Number
//Signature: ([Array]) -> Integer
//Examples:
//highestNumber([1, 4, 2]) -> 4
//highestNumber([-1, -2, -4]) -> -1
function highestNumber(array) {
	var highestNumber = array[0];

	for (var iter = 1; iter < array.length; iter++) {
		if (highestNumber < array[iter]) {
			highestNumber = array[iter];
		}
	}
	return highestNumber;
}

//console.log(highestNumber([1, 4, 2]));
//console.log(highestNumber([-1, -2, -4]));



//Purpose: Function that finds lowest Number
//Signature: ([Arrary]) -> Integer
//Examples:
//lowestNumber([1, 4, 2]) -> 1
//lowestNumber([-1, -2, -4]) -> -4

function lowestNumber(array) {
	var lowestNumber = array[0];

	for (var iter = 1; iter < array.length; iter++) {
		if (lowestNumber > array[iter]) {
			lowestNumber = array[iter];
		}
	}
	return lowestNumber;
}

some = [1, 4, 2].sort(function(a, b) {
	return b - a
})[0]

//console.log(lowestNumber([1, 4, 2]))
//console.log(lowestNumber([-1, -2, -4]))

//Purpose: Find number closest to 0
//Signature: ([Array]) -> Integer
//Examples:
//smallestNumber([1, 4, 2]) -> 1
//smallestNumber([0.1,0.01,0.001]) should return 0.001
//smallestNumber([-1,-2,-4]) should return -1
//smallestNumber([0.1,-0.001]) should return -0.001
function smallestNumber(array) {
	var smallest = array[0];
	for (var iter = 1; iter < array.length; iter++) {
		if (Math.abs(smallest) > Math.abs(array[iter])) {
			smallest = array[iter];
		}
	}
	return smallest
}

smallestNumber([1, 4, 2]);
//console.log(smallestNumber([0.1, 0.01, 0.001]));
//console.log(smallestNumber([-1, -2, -4]));
//console.log(smallestNumber([.1, -.001]));

//Purpose: Calculate sum of numbers
//Signature: ([Array]) -> Integer
//Examples:
//sum([1,2,3]) -> 6
//sum([]) -> 0

function sum(array) {
	var sum = 0;
	for (var iter = 0; iter < array.length; iter++) {
		sum += array[iter];
	}
	return sum;
}

//console.log(sum([1,2,3]));
//console.log(sum([]));

//Purpose: Find mean value of array
//Signature: ([Array]) -> Integer
//Examples:
//mean([1, 2, 3]) -> 2
function mean(array) {
	return sum(array) / array.length;
}

//console.log(mean([1, 2, 3]));

//Purpose: Find index of highest numbers
//Signature: ([Array]) -> Integer
//Examples:
//indexHighestNumber([1,4,2]) should return 1
//indexHighestNumber([-1,-2,-4]) should return 0
function indexHighestNumber(array) {
	var index = 0;
	var highestValue = array[0];

	for (var x = 1; x < array.length; x++) {
		if (highestValue < array[x]) {
			highestValue = array[x];
			index = x;
		}
	}
	return index;
}

//console.log(indexHighestNumber([1, 4, 2]));
//console.log(indexHighestNumber([-1, -2, -4]));

var siblings = ["Sorana", "Joey", "Stephen", "Toma"];
var parents = ["Elena", "Cornel", "Neil", "Socorro"];

siblings.sort();

parents.reverse();
function ourReverse(array) {
	var sorted = array.sort();
	var reverseSorted = [];
	for (var i = sorted.length - 1; i >= 0; i--) {
		reverseSorted.push(sorted[i]);
	}

	return reverseSorted;
}

//console.log(ourReverse(parents));


var all = siblings.concat(parents);
all;

function addTwoArrays(a1, a2) {
	for (var x = 0; x < a2.length; x++) {
		a1.push(a2[0]);
	}
	return a1
}

function findName(name, array) {
	for (var x = 0; x < array.length; x++) {
		if (name === array[x]) {
			return true;
		}
	}
	return false;
}

all.lastIndexOf("Stephen")

//Purpose: Create function that only returns even elements from Array
//Signature: ([Array]) -> [Array]
//Example:
//evenElements([1, 2, 3, 4]) -> [2, 4]
function evenElements(array) {
	var toReturn = [];
	for (var x = 0; x < array.length; x++) {
		if (array[x] % 2 === 0) {
			toReturn.push(array[x]);
		}
	}
	return toReturn;
}

//console.log(evenElements([1, 2, 3, 4]));
//console.log(evenElements([1, 3, 8, 5]));


//Purpose: same as above, but odd

function oddElements(array) {
	var toReturn = [];
	for (var x = 0; x < array.length; x++) {
		if (array[x] % 2 != 0) {
			toReturn.push(array[x]);
		}
	}
	return toReturn;
}

//console.log(oddElements([1,2,3,4]));
//console.log(oddElements([1,2,4,6]));

//Purpose: Get a function and change the array based on that function
//Signature: ([Array], Function()) -> [Array]
//Examples:
//mapArray([5,6], function(x) { return 2*x; }) should return [10,12]

function mapArray(array, func) {
	// Create empty array to be returned
	var returnArray = [];

	/*.forEach() goes through the entire array
	Inside .forEach(), we create a function that pushes returned values to returnArray
	Inside of push is the function inputted that any user can change
	*/
	array.forEach(function(x) {
		returnArray.push(func(x));
	});

	return returnArray;
}

//console.log(mapArray([5, 6], function(x) { return 2*x; }));
//console.log(mapArray([1, 2, 3, 4], function(s) { return s + 3; }));

function filterArray(array, func) {
	// Create emptry array to be returned
	var returnArray = [];

	/*In the forEach, we create a function that pushes only the values that return true from user-inputted function.
	User-inputted function must be a function that returns true/false
	*/
	array.forEach(function(x) {
		if (func(x) === true) {
			returnArray.push(x);
		}
	});
	return returnArray;
}

//console.log(filterArray([5, 6, 7], function(x) { return x >= 6 }));

console.log([5, 6].map(function(x) { return 2 * x; })); //Same functionality as mapArray
console.log([5, 6, 7].filter(function(x) { return x >= 6; })); //Same functionality as filterArray
