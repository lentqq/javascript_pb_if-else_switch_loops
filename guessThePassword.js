function guessThePassword (input) {
    let password = input.shift();
    let text = input.shift();

     if (password === text) {
         console.log ('Welcome!')
     }
     else {
         console.log ('Wrong password!')
     }
}

guessThePassword (['word', 'word'])