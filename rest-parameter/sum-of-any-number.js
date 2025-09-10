function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0)
}
console.log(sum(1,2));
console.log(sum(1,2,3,4));
console.log(sum(10,20,30,40,50,400));


