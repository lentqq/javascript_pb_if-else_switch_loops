function annimal(input) {
    let annimal = input.shift();
    switch (annimal) {
        case 'dog':
            console.log('mammal');
            break;
        case 'crocodile':
        case 'snake':
        case 'tortoise':
        console.log ('reptile')
        break;
        case 'cat':
        console.log ('unknow');
        break;
     }
}

annimal (['cat'])