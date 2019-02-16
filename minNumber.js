function minNumber (input){
    let n = Number(input.shift());
    let minNumber = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < n; i++){
        let currentNumber = Number(input.shift());
        if (currentNumber < minNumber){
            minNumber = currentNumber;
        }
    }
    console.log(minNumber);
}

minNumber([3, 7, 12, 29])