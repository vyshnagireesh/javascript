const students = [
    {name:"vyshna", age:21, grade:"A"},
    {name:"sreethu", age:21, grade:"A"},
    {name:"salman", age:59, grade:"d"},
    {name:"firnas", age:45, grade:"A"}

]
//accessings data
console.log(students[0].name);
console.log(students[1].grade);

//looping through object array
students.forEach(stdnt => {
    console.log(`${stdnt.name} is ${stdnt.age} years old.`);
    
})
