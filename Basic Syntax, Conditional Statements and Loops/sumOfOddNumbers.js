function sumOfOddNumbers(n) {
  let currentNumber = 1;
  let sum = 0;

  for (let count = 0; count < n; count++) {
    console.log(currentNumber);
    sum += currentNumber;
    currentNumber += 2;
  }

  console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);
