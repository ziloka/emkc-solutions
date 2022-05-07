const value1 = parseInt(process.argv[2]);

// write your solution here
let difference = value1-1;
let bottomLeft = value1**2;
let bottomRight = bottomLeft-difference;
let topRight = bottomLeft-(difference*2);
let topLeft = bottomLeft-(difference*3);
console.log(bottomLeft+bottomRight+topRight+topLeft);
