//For to While
//Purpose: Convert for to while loop
var i=0;
while ( i<10 ) {
  console.log(i);
  i++;
}

//.. and Back
//Purpose: Convert while to for loop
for (var a=10; a>0; a--) {
  console.log(a);
}

//Duplicate Array
//Purpose: Merge two arrays and remove all duplicates in array
//Signature: ([Array], [Array]) -> [Array]
function mergeArray(a1, a2) {
  var all = a1.concat(a2);

  /* Use filter function to find if same value is in arrays
  ** .indexOf() takes current value and compares it to current index
  ** this is done to see if the value is at the first instance at that index
  */
  all = all.filter(function(value, index) {
    return all.indexOf(value) === index;
  });
  return all;
}

mergeArray([1, 2, 3], [2, 30, 1])

//Pre-fill
//Purpose: Create an array based on howMany times and the printed item
//Signature: (Integer, [Array]) -> [Array]
function fillArray(howMany, print) {
  var toReturn = [];
  //Loops through and appends to toReturn the same value as print
  for (var x = 0; x < howMany; x++) {
    toReturn.push(print);
  }

  return toReturn;
}

fillArray(6, 0);

//Clean Function
//Purpose: Removes false, null, 0, and '' from an array
//Signature: ([Array]) -> [Array]
function filterArrayValues(array) {
  var empty = ['']

  //Uses filter function that returns values that do not equal the unwanted values
  empty = array.filter(function(value) {
    return (value !== false && value !== null && value !== 0 && value !== "");
  })

  return empty;
}
filterArrayValues([58, '', 'abcd', true, null, false, 0])

//Sum Target
//Purpose: Find a pair of values in an array that equals to given number
function findPair(compare, array) {
  var prevValue;

  /* Used two for loops to compare values to itself
  ** The conditional takes into account that it cannot compare to itself
  */
  for (var x = 0; x < array.length; x++) {
    for (var i = 0; i < array.length; i++) {
      if ((array[x] + array[i] === compare) && (i !== x)) {
        return [array[x], array[i]];
      }
    }
  }
  return false;
}

findPair(50, [10,20,10,40,50,60,70]);
