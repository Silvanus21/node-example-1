// var rectangle = {
//     perimeter: (l, b) => 2 * (l + b),
//     area: (l, b) => l * b
// }

var rectangle = require("./rectangle");


solveRect = (l, b) => {
    console.log("Solving for rectangle with length : " + l + " and breath : " + b + " -->");
    if (l <= 0 || b <= 0) {
        console.log("Dimensions of Rectangle should be graeter than zero !");
        console.log("\n");
    }
    else {
        console.log("Area of the rectangle is : " + rectangle.area(l, b));
        console.log("Perimeter of the rectangle is : " + rectangle.perimeter(l, b));
        console.log("\n");
    }
}


solveRect(2, 3);
solveRect(3, 5);
solveRect(0, 4);