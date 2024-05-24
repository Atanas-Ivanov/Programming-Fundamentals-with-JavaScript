function rounding(n1, n2) {
  if (n2 > 15) {
    n2 = 15;
  }
  let result = n1.toFixed(n2);
  let finalResult = parseFloat(result);
  console.log(finalResult);
}
rounding(3.1415926535897932384626433832795, 2);
