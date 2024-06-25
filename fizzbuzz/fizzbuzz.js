function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      // if the number is divisible by 3 and 5, print FizzBuzz
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      // if the number is divisible by 3, print Fizz
      console.log("Fizz");
    } else if (i % 5 === 0) {
      // if the number is divisible by 5, print Buzz
      console.log("Buzz");
    } else {
      // else, print the number
      console.log(i);
    }
  }
}

if (require.main === module) {
  fizzBuzz(100);
}

module.exports = fizzBuzz;
