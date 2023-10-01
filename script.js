function printDiamondPattern(n) {
    if (n % 2 === 0) {
      // Ensure n is odd for a proper diamond shape
      n++;
    }
  
    // Upper part of the diamond
    for (let i = 1; i <= n; i += 2) {
      let spaces = (n - i) / 2;
      let stars = i;
  
      let row = "";
  
      // Inner loop for printing spaces
      for (let j = 0; j < spaces; j++) {
        row += " ";
      }
  
      // Inner loop for printing stars
      for (let j = 0; j < stars; j++) {
        row += "*";
      }
  
      console.log(row);
    }
  
    // Lower part of the diamond
    for (let i = n - 2; i >= 1; i -= 2) {
      let spaces = (n - i) / 2;
      let stars = i;
  
      let row = "";
  
      // Inner loop for printing spaces
      for (let j = 0; j < spaces; j++) {
        row += " ";
      }
  
      // Inner loop for printing stars
      for (let j = 0; j < stars; j++) {
        row += "*";
      }
  
      console.log(row);
    }
  }
  
  // Example usage:
  printDiamondPattern(9); // Adjust the argument to change the size of the diamond