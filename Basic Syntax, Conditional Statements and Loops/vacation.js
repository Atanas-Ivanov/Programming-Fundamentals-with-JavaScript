function vacation(peopleCount, visitorType, day) {
  let studentPrice = 0;
  let businessPrice = 0;
  let regularPrice = 0;
  let totalPrice = 0;
  switch (day) {
    case "Friday":
      studentPrice = 8.45;
      businessPrice = 10.9;
      regularPrice = 15;
      break;
    case "Saturday":
      studentPrice = 9.8;
      businessPrice = 15.6;
      regularPrice = 20;
      break;
    case "Sunday":
      studentPrice = 10.46;
      businessPrice = 16;
      regularPrice = 22.5;
      break;
  }
  switch (visitorType) {
    case "Students":
      totalPrice = studentPrice * peopleCount;
      if (peopleCount >= 30) {
        totalPrice *= 0.85; // Apply 15% discount
      }
      break;
    case "Business":
      totalPrice = businessPrice * peopleCount;
      if (peopleCount >= 100) {
        totalPrice -= 10 * businessPrice; // Subtract 10 from the total price
      }
      break;
    case "Regular":
      totalPrice = regularPrice * peopleCount;
      if (peopleCount >= 10 && peopleCount <= 20) {
        totalPrice *= 0.95; // Apply 5% discount
      }
      break;
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
