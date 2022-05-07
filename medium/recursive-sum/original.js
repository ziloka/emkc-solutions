const value1 = process.argv[2];

// write your solution here
function doUntilOneNumberExists(str) {
  return str.length == 1 ? str : doUntilOneNumberExists(String(str.split('').reduce((a, b) => (+a)+(+b))));
}

console.log(doUntilOneNumberExists(value1));