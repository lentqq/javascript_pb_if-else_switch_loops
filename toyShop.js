function toyShop (input) {
    let excursionPrice = Number(input.shift());
    let puzzels = Number(input.shift());
    let talckingDolls = Number(input.shift());
    let teddys = Number(input.shift());
    let minions = Number(input.shift());
    let trucks = Number(input.shift());
    let sum = puzzels * 2.60 + talckingDolls * 3.00 + teddys * 4.10 + minions * 8.20 + trucks * 2.00;
    let numOfToys = puzzels + talckingDolls + teddys + minions + trucks;

    if (numOfToys >= 50) {
        sum = sum - 0.25 * sum;
    }

    let profit = sum - 0.10 * sum;

    if (profit >= excursionPrice) {
        console.log (`Yes! ${(profit - excursionPrice).toFixed(2)} lv.left.`)
    }
    else {
        console.log (`Not enough money! ${(excursionPrice - profit).toFixed(2)} lv needed.`)
    }
}

toyShop ([40.8, 20, 25, 30, 50, 10])