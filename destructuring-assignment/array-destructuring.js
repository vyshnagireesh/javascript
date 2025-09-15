const numbers = [10, 20, 30, 40];

//basic destructuring
const [a, b] = numbers;
console.log(a);
console.log(b);
// da is a js feauture that allow due to unpack values from array or propraties into saperate variable.
//js feature
//arrayil ulla elements object propraties oke saprete cheya

//slipping values
const [, , c] = numbers;
console.log(c);

//using rst operator
const [x,...rest] = numbers;
console.log("x is :", x);
console.log(rest);



