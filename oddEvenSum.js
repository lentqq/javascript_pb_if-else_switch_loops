function oddEvenSum (input){
    let n = Number(input[0]);
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 1; i <= n; i++){
        let cuurentNumber = Number(input[i]);
        if (i % 2 == 0){
            evenSum += cuurentNumber;
        }
        else{
            oddSum += cuurentNumber;
        }
    }

    if (evenSum === oddSum){
        console.log(`Yes, sum = ${evenSum}`);
    }
    else{
        console.log(`No, diff = ${Math.abs(evenSum - oddSum)}`);
    }
}


oddEvenSum([3, 5, 8, 1])