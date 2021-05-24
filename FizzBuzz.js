
// for loop to increment through 
// ch eck if they are multiples of 3 and return fizz
// check if they are multiples of 5 and return buzz
// if they do both then return fizzbuzz
// use console.log to print to the console.

for (let i=1; i<101; i++) {
    if ((i%3 === 0) && (i%5 === 0)) {
        console.log("FizzBuzz");
    } else if (i%3 === 0) {
        console.log("Fizz");
    } else if (i%5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
