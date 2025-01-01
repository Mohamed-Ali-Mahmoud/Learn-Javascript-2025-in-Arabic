/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

// بترجع الفيمة النهائية
// عل سبيل المثال لو جمعنا الأرقام على بعض سوف تكون النتية النهائية 75

let nums = [10, 20, 15, 30];

let sumArray = nums.reduce((accumalte, currentValue, currentIndex, array) => {
  console.log(`Accumulate is: ${accumalte}`);
  console.log(`Current Value is: ${currentValue}`);
  console.log(`Current Index is: ${currentIndex}`);
  console.log(`array is: ${array}`);
  console.log(accumalte + currentValue);
  console.log("##################");
  return accumalte + currentValue;
});

// Accumulate is: 10
// Current Value is: 20
// Current Index is: 1 (index for 20 is 1)
// array is: 10,20,15,30
// 30
// ###################################
// Accumulate is: 30
// Current Value is: 15
// Current Index is: 2 (index for 15 is 2)
// array is: 10,20,15,30
// 45
// ###################################
// Accumulate is: 45
// Current Value is: 30
// Current Index is: 3 (index for 15 is 3)
// array is: 10,20,15,30
// 75

let nums2 = [10, 20, 15, 30];

let sumArray2 = nums.reduce((accumalte, currentValue, currentIndex, array) => {
  console.log(`Accumulate is: ${accumalte}`);
  console.log(`Current Value is: ${currentValue}`);
  console.log(`Current Index is: ${currentIndex}`);
  console.log(`array is: ${array}`);
  console.log(accumalte + currentValue);
  console.log("##################");
  return accumalte + currentValue;
}, 5); // initial value

// Accumulate is: 5
// Current Value is: 10
// Current Index is: 0 //(index for 10 is 0)
// array is: 10,20,15,30
// 15
// ###################################
// Accumulate is: 15
// Current Value is: 20
// Current Index is: 1
// array is: 10,20,15,30
// 35
// ###################################
// Accumulate is: 35
// Current Value is: 15
// Current Index is: 2
// array is: 10,20,15,30
// 50
// ###################################
// Accumulate is: 50
// Current Value is: 30
// Current Index is: 3
// array is: 10,20,15,30
// 80
