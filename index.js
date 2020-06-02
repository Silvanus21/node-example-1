// var rectangle = {
//     perimeter: (l, b) => 2 * (l + b),
//     area: (l, b) => l * b
// }

var rect = require("./rectangle");


solveRect = (l, b) => {
    console.log("solving for the rectangle having dimension l = " + l + " and b = " + b);

    rect(l, b,  (err, rectangle) => {
      if(err) {
        console.log("ERROR : ", err.message);
      }

      else
      {
        console.log("the area of the rectangle having dimension of l = " + l + " and b = " + b + " is : " + rectangle.area());
        console.log("the perimeter of the rectangle having dimension of l = " + l + " and b = " + b + " is : " + rectangle.perimeter());
      }

    });
}


solveRect(2, 3);
solveRect(3, 5);
solveRect(0, 4);