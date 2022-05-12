const value1 = parseInt(process.argv[2]);

// write your solution here
let difference = value1-1;
let corner1 = value1**2;
let corner2 = corner1-difference;
let corner3 = corner2-difference;
let corner4 = corner3-difference;
console.log(corner1+corner2+corner3+corner4);
