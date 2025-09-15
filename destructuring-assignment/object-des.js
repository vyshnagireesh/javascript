const person = { name: "shadiya", age: 78, country: "india" }

//basic  destructuring
const { name, age } = person;
console.log(name);
console.log(age);

//rename varables
const { country: nation } = person;
console.log("nation:", nation);

//default value
const { gender = 'female' } = person;
console.log("gender:", gender);




