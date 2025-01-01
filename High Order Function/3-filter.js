/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/

/*==========================================================================
                  Get Friends With Name Starts With A
============================================================================*/

let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let filterdFreinds = friends.filter((ele) => {
  return ele.startsWith("A");
});

console.log(filterdFreinds);

/*==========================================================================
                           Get Even Numbers Only
============================================================================*/

let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter((ele) => {
  return ele % 2 === 0;
});
console.log(evenNumbers);
