function division(num) {
  let divisibleNum = [10, 7, 6, 3, 2];
  for (let i = 0; i < divisibleNum.length; i++) {
    if (num % divisibleNum[i] === 0) {
      console.log(`The number is divisible by ${divisibleNum[i]}`);
      return;
    }
  }
  console.log("Not divisible");
}
division(15);
