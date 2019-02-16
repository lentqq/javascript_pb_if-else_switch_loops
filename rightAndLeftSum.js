function rightAndLeftSum(input) {
    let n = Number(input[0]);
    let rightSum = 0;
    let leftSum = 0;

    for (let i = 1; i <= 2; i++) {
        let currentNumber = Number(input[i]);
        leftSum += currentNumber;
    }

    for (let i = n + 1; i <= 2 * n; i++) {
        let currentNumber = Number(input[i]);
        rightSum += currentNumber;
    }

    // let diff = Math.abs(leftSum - rightSum);
    // if (diff == 0){
    //     console.log(`Yes, sum = ${leftSum}`);
    // }
    // else{
    //     console.log(`No, diff = ${diff}`);
    // }

    if (rightSum === leftSum) {
        console.log(`Yes, sum = ${rightSum}`);
    }
    else {
        console.log(`No, diff = ${Math.abs(rightSum - leftSum)}`);
    }
}

rightAndLeftSum([2, 10, 90, 60, 40])