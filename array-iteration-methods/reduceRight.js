// same as Reducer, but start from the end of the array

let nums = [10,20];
let result = nums.reduceRight((acc, curr) => acc - curr, 10);
console.log(result);
