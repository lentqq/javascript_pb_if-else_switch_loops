function areaOfFugure (input) {
    let figure = input.shift();

    switch (figure)
    {
        case 'square':
        let side = Number(input.shift());
        let squareArea = side * side;
        console.log (squareArea.toFixed(3));
        break;

        case 'rectangle':
        let side1 = Number(input.shift());
        let side2 = Number(input.shift());
        let rectangleArea = side1 * side2;
        console.log (rectangleArea.toFixed(3));
        break;

        case 'circle':
        let radius = Number(input.shift());
        let circleArea = Math.PI * Math.pow(radius, 2);
        console.log (circleArea.toFixed(3));
        break;

        case 'triangle':
        let triangleSide = Number(input.shift());
        let height = Number(input.shift());
        let triangleArea = triangleSide * height / 2;
        console.log (triangleArea.toFixed(3))
        break;
    }
}

areaOfFugure(['triangle', 4.5, 20])