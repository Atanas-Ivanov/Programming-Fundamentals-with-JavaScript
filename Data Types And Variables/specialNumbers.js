function printSpecialNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let num = i;
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    let isSpecial = sum === 5 || sum === 7 || sum === 11;
    let result = isSpecial ? "True" : "False";
    console.log(`${i} -> ${result.charAt(0).toUpperCase() + result.slice(1)}`);
  }
}

// Example usage:
printSpecialNumbers(20);
