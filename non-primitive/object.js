// object it is a collaction of key-value pairs
// using to store multiple value in a single value & single variables can be any datatype

const person ={
    name: 'vyshna',
    age:21,
    isStudent: true

}
console.log(person.name);
console.log(person["age"]);

// add or modify datas

person.city = "new york";
person.age = 31;

delete person.city;
console.log(person);

