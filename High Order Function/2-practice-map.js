/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

/*==========================================================================
              make the capital letter lower and vers versa 
============================================================================*/

let swappingCases = "elZERo";

let sw = swappingCases
  .split("")
  .map((ele) => {
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
  })
  .join("");

console.log(sw);

/*==========================================================================
              invert number if is it positive make it negative 
============================================================================*/

let invertedNumbers = [1, -10, -20, 15, 100, -30];

let inNum = invertedNumbers.map((ele) => {
  return -ele;
});

console.log(invertedNumbers);

/*==========================================================================
     remove numbers from this word below and return the word elZero
============================================================================*/

let ignoreNumbers = "Elz123er4o";

let ignNum = ignoreNumbers
  .split("")
  .map((ele) => {
    console.log(isNaN(parseInt(ele)));
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .join("");

console.log(ignNum);
