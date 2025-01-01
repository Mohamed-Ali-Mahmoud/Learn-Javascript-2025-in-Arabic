/*==========================================================================
                 get th biggest word ever from array below!
============================================================================*/

let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];

let wordWin = theBiggest.reduce((accumlate, currentValue) => {
  console.log(`Accumlate is: ${accumlate}`);
  console.log(`Current Value is: ${currentValue}`);
  console.log(
    accumlate.length >= currentValue.length ? accumlate : currentValue
  );

  return accumlate.length >= currentValue.length ? accumlate : currentValue;
  console.log("######################");
});

/*==========================================================================
                 exclude the word ELZERO from this array!
============================================================================*/

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let word = removeChars
  .filter((ele) => {
    return !ele.startsWith("@");
  })
  .reduce((accumalte, crrentValue) => {
    return accumalte + crrentValue;
  });
console.log(word);
