
//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
// Example Input: "hello world" Example Output: "dlrow olleh"
const reversedVersion = (string) => {
    const lowerString = string.toLowerCase();
    const reversedString = [];
    for (let s = lowerString.length - 1; s >= 0; s--) {
        reversedString.push(lowerString[s])
    }
    return reversedString.slice(',').join("")
}
const result = reversedVersion("hello world")
// console.log(result)


// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
// Example Input: [2, -5, 10, -3, 7] Example Output: 19
const positiveNumbersFun = (numbers) => {
    const positiveNumber = numbers.filter(num => 0 < num)
    const sum = positiveNumber.reduce((prev, current) => prev + current, 0)
    return sum
}
const sumResult = positiveNumbersFun([2, -5, 10, -3, 7]);
// console.log(sumResult)


// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3
function frequentFun(numbers) {
    const frequency = {};
    let maxFrequency = 0;
    let mostFrequentElement = null;
    for (const e of numbers) {
        frequency[e] = (frequency[e] || 0) + 1;
        if (frequency[e] > maxFrequency) {
            maxFrequency = frequency[e];
            mostFrequentElement = e;
        }
    }
    return mostFrequentElement;
}
const myArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequent = frequentFun(myArray);
//   console.log(mostFrequent);


//   Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
//   Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)
function findTwoNumbersWithSum(arr, target) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (map.has(complement)) return [map.get(complement), i];
        map.set(arr[i], i);
    }
    return [];
}
const sortedArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const indices = findTwoNumbersWithSum(sortedArray, targetValue);
// console.log(indices);



//   Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
function calculator(num1, operator, num2) {
    if (operator === '+') return num1 + num2;
    else if (operator === '-') return num1 - num2;
    else if (operator === '*') return num1 * num2;
    else if (operator === '/') {
        if (num2 === 0) throw new Error("Cannot divide by zero!");
        return num1 / num2;
    }
    throw new Error("Invalid operator!");
}
try {
    const num1 = 5;
    const operator = '+';
    const num2 = 3;
    const result = calculator(num1, operator, num2);
    // console.log(result);
} catch (error) {
    // console.error(error.message);
}


// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
function generateRandomPassword(length) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }
    return password;
}
const passwordLength = 3;
const randomPassword = generateRandomPassword(passwordLength);
// console.log(randomPassword);


// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
function findSecondSmallest(arr) {
    if (arr.length < 2) {
      throw new Error("Array should have at least two elements.");
    }
    arr.sort((a, b) => a - b);
    return arr[1];
  }
  const myArray2 = [5, 8, 9, 3, 4, 7, 6];
  const secondSmallest = findSecondSmallest(myArray2);
  console.log( secondSmallest);
  



