function equalWords (input) {
    let firstWord = input.shift().toUpperCase();
    let secondWord = input.shift().toUpperCase();

    if (firstWord == secondWord) {
        console.log ('Equal Words');
    }

    else {
        console.log ('Different Words')
    }
}

equalWords (['hello', 'hello'])