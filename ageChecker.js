// Prompt user to enter their age
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter your age: ', age => {
    // Convert age to a number
    age = parseInt(age);

    // Check the age category and log the appropriate message
    if (age < 13) {
        console.log('You are a child.');
    } else if (age >= 13 && age <= 19) {
        console.log('You are a teenager.');
    } else if (age >= 20) {
        console.log('You are an adult.');
    } else {
        console.log('Invalid input.');
    }

    // Close the readline interface
    readline.close();
});
