function checkOddEven(...numbers) {
  numbers.forEach(num => {
    if (num % 2 === 0) {
      console.log(`${num} is Even`);
    } else {
      console.log(`${num} is Odd`);
    }
  });
}

// Example usage
checkOddEven(10,20,30,40,50);