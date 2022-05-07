const value1 = process.argv[2];

// write your solution here
console.log(value1.split(',').reduce((a, b) => (+a)+(+b)));
