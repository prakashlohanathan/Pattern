function triangle(rows){
for (let i=1;i<=rows;i++){
    console.log("*".repeat(i));
}
    console.log("\n");
}
triangle(5);

function pyramid(row){
    for(let i=1;i<=row;i++){
        let spaces = " ".repeat(row-i);
        let stars = "*".repeat(2*i-1);
        console.log(spaces + stars);
    }
    console.log("\n");
}
pyramid(5);

// Function to print the star square pattern
function printStarSquare(size) {
    // Loop through rows
    for (let i = 0; i < size; i++) {
      let row = '';
      // Loop through columns
      for (let j = 0; j < size; j++) {
        row += '* ';
      }
      console.log(row);
    }
  }
  
  // Call the function with size 5
  printStarSquare(5);


  // Function to print a star pyramid pattern
function printStarPyramid(height) {
    // Loop through each row
    for (let i = 1; i <= height; i++) {
      let row = '';
      
      // Add spaces before stars for proper alignment
      for (let j = 1; j <= height - i; j++) {
        row += ' ';
      }
      
      // Add stars for the current row
      for (let k = 1; k <= (2 * i - 1); k++) {
        row += '*';
      }
      
      // Print the row
      console.log(row);
    }
  }
  
  // Call the function with height 5
  printStarPyramid(5);

  // Function to print a hollow square star pattern
function printHollowSquare(size) {
    // Loop through each row
    for (let i = 0; i < size; i++) {
      let row = '';
      
      // Loop through each column in the row
      for (let j = 0; j < size; j++) {
        // Print '*' at the border, otherwise print a space
        if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
          row += '*';
        } else {
          row += ' ';
        }
      }
      
      // Print the row
      console.log(row);
    }
  }
  
  // Call the function with size 5
  printHollowSquare(5);

  
  // Function to print an inverted star pyramid pattern
function printInvertedStarPyramid(height) {
    // Loop through each row
    for (let i = height; i >= 1; i--) {
      let row = '';
      
      // Add spaces for alignment
      for (let j = 1; j <= height - i; j++) {
        row += ' ';
      }
      
      // Add stars for the current row
      for (let k = 1; k <= (2 * i - 1); k++) {
        row += '*';
      }
      
      // Print the row
      console.log(row);
    }
  }
  
  // Call the function with height 5
  printInvertedStarPyramid(5);
  
  

