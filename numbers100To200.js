function numbers100To200 (input) {
    let num = Number(input.shift());

    if (num < 100) {
        console.log('Less tan 100');
    }
    else if (num >= 100 & num <= 200) {
        console.log ('Beetwin 100 and 200');
    }
    else {
        console.log ('Greater than 200');
    }
}

numbers100To200 ([999])