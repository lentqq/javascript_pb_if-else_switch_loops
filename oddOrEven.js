function oddOrEven (input) {
    let num1 = Number(input.shift());

    if (num1 % 2 == 0 ){
        console.log ('even');
    }
    else {
        console.log ('odd');
    }
}

oddOrEven ([19])