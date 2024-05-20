// Define the character to be used in the pattern
const character = "!";

// Define the number of rows in the pattern
const count = 10;

// Initialize an array to hold each row of the pattern
const rows = [];

// Define a flag to indicate whether the pattern should be inverted
let inverted = false;

// Define a function to pad a row with spaces on either side
function padRow(rowNumber, rowCount) {
    // Repeat a space character for the difference between the total row count and the current row number,
    // then repeat the pattern character for twice the current row number minus one,
    // and finally repeat the space character again for the difference between the total row count and the current row number.
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// Loop through each row
for (let i = 1; i <= count; i++) {
    // If the pattern should be inverted, add the row at the beginning of the array
    // Otherwise, add the row at the end of the array
    if (inverted) {
      rows.unshift(padRow(i, count));
    } else {
      rows.push(padRow(i, count));
    }
}

// Initialize a string to hold the final result
let result = ""

// Loop through each row in the array and add it to the result string
for (const row of rows) {
    result = result + "\n" + row;
}

// Output the final result
console.log(result);
