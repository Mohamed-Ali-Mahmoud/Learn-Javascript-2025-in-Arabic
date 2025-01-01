// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let smallWords = sentence.split(" ").filter((ele) => {
  return ele.length <= 4;
});
console.log(smallWords);

/*==========================================================================
                           Filter Strings + Multiply
============================================================================*/

let mix = "A13BS2ZX";

let num = mix
  .split("")
  .filter((el) => {
    return !isNaN(parseInt(el)) * 2; // if is not string return it and multiply by 2
  })
  .map((ele) => {
    return ele * 2;
  });

console.log(num);
