function dayOfWeek (input) {
    let numOfDay = Number(input.shift());
     
    switch (numOfDay)
    {
        case 1:
        console.log ('Monday');
        break;
        case 2:
        console.log ('Tuesday');
        break;
        case 3:
        console.log ('Wednesday');
        break;
        case 4:
        console.log ('Thurseday');
        break;
        case 5:
        console.log ('Friday');
        break;
        case 6:
        console.log ('Satureday');
        break;
        case 7:
        console.log ('Sunday');
        break;
        default:
        console.log ('Error!')
        break;
    }
}

dayOfWeek ([19])