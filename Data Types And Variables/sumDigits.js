function sumDigits(num) {
  let numStr = num.toString();
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    sum += Number(numStr[i]);
  }
  console.log(sum);
}
sumDigits(245678);
