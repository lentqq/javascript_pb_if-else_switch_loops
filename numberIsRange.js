function numberIsRange (input) {
    let digit = Number(input.shift());

    while (digit < 1 || digit > 100) 
    {
        digit = Number(input.shift());
    }

    console.log (digit);
}

numberIsRange ([7])