function pyramidConstruction(base, increment) {
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let gold = 0;
  let steps = 0;

  while (base > 2) {
    steps++;
    let currentStone = (base - 2) * (base - 2) * increment;
    stone += currentStone;

    let currentOuterLayer = (base * 4 - 4) * increment;
    if (steps % 5 === 0) {
      lapis += currentOuterLayer;
    } else {
      marble += currentOuterLayer;
    }

    base -= 2;
  }

  // Final step with gold
  steps++;
  gold += base * base * increment;

  // Calculate final height
  let finalHeight = Math.floor(steps * increment);

  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${finalHeight}`);
}

pyramidConstruction(11, 0.75);
