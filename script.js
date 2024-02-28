// Create a program that calculates the total of all the numbers inside the nested array.

let nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let total = 0;

// Iterate over the bigger box
for (let i = 0; i < nestedArray.length; i++) {
    // Iterate over each smaller boxes
    for (let j = 0; j < nestedArray[i].length; j++) {
        // Add the current element to the total
        total += nestedArray[i][j];
    }
}

console.log("Total of all numbers in the nestedArray:", total);
