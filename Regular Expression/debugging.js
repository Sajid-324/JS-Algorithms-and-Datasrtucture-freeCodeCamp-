/*// Open your browser console.
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log() to print the output variable.
console.log(output)
// Run the tests to see the difference between the two consoles.

// Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.*/

/*
function mixedNumbers(arr) {
  // Only change code below this line
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
*/

/*const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(0,2);
arr.splice(1,2);
arr.splice(2,2);
// Only change code above this line
console.log(arr);
*/

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    for (let i = 0;i<num;i++)newArr[i] = [...arr];
    // Only change code above this line
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 3));
