// prime-number.js

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // If num is divisible by any number, it's not prime
        }
    }
    return true; // If no divisors were found, the number is prime
}

// Example: Check if a number is prime
const number = 29; // You can change this value to test with different numbers
if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
} else {
    console.log(`${number} is not a prime number.`);
}
