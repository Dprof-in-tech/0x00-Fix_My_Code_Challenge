#!/usr/bin/node
/*
  Print a square with the character #
   
  The size of the square must be the first argument 
  of the program.
*/

if (process.argv.length <= 2) {
  process.stderr.write("Missing argument\n");
  process.stderr.write("Usage: ./1-print_square.js <size>\n");
  process.stderr.write("Example: ./1-print_square.js 8\n");
  process.exit(1);
}

// Correctly parse the size argument as an integer
size = parseInt(process.argv[2], 10); // Base 10 for integer parsing

// Ensure the size is a positive integer
if (isNaN(size) || size <= 0) {
  process.stderr.write("Error: Size must be a positive integer.\n");
  process.exit(1);
}

for (let i = 0; i < size; i++) {
  // Print a row of size characters using a loop
  for (let j = 0; j < size; j++) {
    process.stdout.write("#");
  }
  // Move to the next line after printing each row
  process.stdout.write("\n");
}
