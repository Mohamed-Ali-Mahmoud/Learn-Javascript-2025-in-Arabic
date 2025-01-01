// Lessions Form 71 : 78
/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/

/*==========================================================================
Traditional Way for make a new array and sum element by 1 with each element
============================================================================*/

const numbers = [1, 2, 3, 4, 5];
const newArray = []; // 2 3 4 5 6

for (let i = 0; i < numbers.length; i++) {
  newArray.push(numbers[i] + 1);
}
//console.log(newArray); // 2 3 4 5 6

/*==========================================================================
                            same Idea With Map
============================================================================*/

// elemaent parapmeter is requird, index and array is optional

// numbers.map((element, index, array) => {
//   console.log(`current element is: ${element}`);
//   console.log(`current index is: ${index}`);
//   console.log(`array is: ${array}`);
// }, 10);

/*==========================================================================
     map Way for make a new array and sum element by 1 with each element
============================================================================*/

numbers.map((element, index, array) => {
  elementSelf = element + element;
  //console.log(elementSelf);
}, 10);

/*==========================================================================
                         use nemed function in map
============================================================================*/
function sumElement(nums) {
  return nums + nums;
}

let add = numbers.map(sumElement);
console.log(add);
