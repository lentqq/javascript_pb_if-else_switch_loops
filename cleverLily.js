function cleverLily(input) {
    let age = Number(input[0]);
    let washingMashinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let everyYearMoney = 0;
    let sumMoney = 0;
    let moneyYears = 0;
    let toyYears = 0;

    for (let i = 1; i <= age; i++) {
    
     if (i % 2 == 0) {
            everyYearMoney += 10;
            sumMoney += everyYearMoney;
            moneyYears++;
        }
        else {
            toyYears++;
        }
    }
    let soldToys  = toyYears * toyPrice;
    let stolenMoney = moneyYears * 1;
    let savedMoney = sumMoney + soldToys - stolenMoney;

    if (savedMoney > washingMashinePrice){
        console.log(`Yes! ${(savedMoney - washingMashinePrice).toFixed(2)} lv remain.`)
    }
    else{
        console.log(`No! ${(washingMashinePrice - savedMoney).toFixed(2)} lv needed. `)
    }
}

cleverLily([21, 1570.98, 3])