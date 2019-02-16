function sumNumbers (input) {
    let sum = 0;
    let n = Number(input.shift());

    for (let i = 0; i < n; i++){
        let currentNumber = Number(input.shift());
        sum += currentNumber;
    }
    console.log(sum);
}

sumNumbers([3, 10, 20, 40])