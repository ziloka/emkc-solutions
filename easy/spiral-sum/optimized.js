const value1 = parseInt(process.argv[2]);

// write your solution here
let difference = value1-1;
let corner1 = value1**2;
let corner2 = bottomLeft-difference;
let corner3 = bottomLeft-(difference*2);
let corner4 = bottomLeft-(difference*3);
console.log(corner1+corner2+corner3+corner4);
