// For loop example
// This loop will print numbers from 0 to 4
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}

// While loop example
// This loop will print numbers from 0 to 4
let j = 0;
while (j < 5) {
    console.log(j); // Output: 0, 1, 2, 3, 4
    j++;
}

// Do-while loop example
// This loop will print numbers from 0 to 4
let k = 0;
do {
    console.log(k); // Output: 0, 1, 2, 3, 4
    k++;
} while (k < 5);

// Function to count the number of characters in a string
function countCharacters(str) {
    return str.length;
}
// Function to count the number of consonants in a string
function countConsonants(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let char of str) {
        if (char.match(/[a-zA-Z]/) && !vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Example usage
console.log(countConsonants(exampleString)); // Output: 7

// Example usage
let exampleString = "Hello, world!";
console.log(countCharacters(exampleString)); // Output: 13

// Function to count the number of vowels in a string
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Example usage
console.log(countVowels(exampleString)); // Output: 3