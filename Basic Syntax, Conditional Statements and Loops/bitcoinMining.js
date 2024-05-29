function bitcoinMining(shift) {
  const bitcoinPrice = 11949.16;
  const goldPricePerGram = 67.51;

  let totalMoney = 0;
  let totalBitcoins = 0;
  let dayOfFirstBitcoin = 0;

  for (let day = 1; day <= shift.length; day++) {
    let goldMined = shift[day - 1];

    // Stealing 30% of the gold every third day
    if (day % 3 === 0) {
      goldMined *= 0.7;
    }

    // Calculate money from the mined gold
    totalMoney += goldMined * goldPricePerGram;

    // Buy bitcoins if there's enough money
    while (totalMoney >= bitcoinPrice) {
      if (totalBitcoins === 0) {
        dayOfFirstBitcoin = day;
      }
      totalBitcoins++;
      totalMoney -= bitcoinPrice;
    }
  }

  console.log(`Bought bitcoins: ${totalBitcoins}`);
  if (totalBitcoins > 0) {
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
