function maxNumber (input) {
    let n = Number(input.shift());
    let maxNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < n; i++){
        let currentNumber = Number(input.shift());
        if (currentNumber > maxNumber){
            maxNumber = currentNumber;
        }
    }
    console.log(maxNumber);
} 

maxNumber([4, 10, 25, 245,273])