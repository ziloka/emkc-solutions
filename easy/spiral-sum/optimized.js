const value1 = parseInt(process.argv[2]);

// write your solution here
let difference = value1-1;
let corner1 = value1**2;
let corner2 = corner1-difference;
let corner3 = corner2-difference;
let corner4 = corner3-difference;
console.log(corner1+corner2+corner3+corner4);

const value1 = parseInt('25x25');

// recursive solution?
// write your solution here
// let diff = value1-1;
// let getCorners = (startNum, diff, count, nums) => {
//   nums.push(startNum-diff);
//   if (nums.length == count) return nums;
//   else return getCorners(startNum-diff, diff, count, nums);
// }
// let corners = 
// console.log(getCorners(value1**2, value1-1, 4, [value1-1]).reduce((a, b) => a+b));
