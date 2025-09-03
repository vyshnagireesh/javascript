//it a way to defined function inside a expreesion & assian it ta a variable
//key features
// 1. anontmous or named
// 2. not hoisted
// 3. can be used as argument
// 4. can be assigned to variable/object


const sayhello = function () {
    console.log("hello!");

}
sayhello();
//------------examble for object------------
const math = {
    add: function (a,b){
        return a+b ;
    }
}
console.log(math.add(10,10));// argument
