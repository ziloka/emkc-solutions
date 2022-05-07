const value1 = process.argv[2];
const value2 = process.argv[3];

// write your solution here
let arr1 = value1.split(',');
let arr2 = value2.split(',');
let result = [];
let switchArr = true;
let currentIndex = 0;
for (let i = 0; i < (arr1.length+arr2.length); i++) {
    result.push((switchArr ? arr1 : arr2)[currentIndex]);
    switchArr = switchArr ? false : true;
    if (switchArr === true) currentIndex++;
}

console.log(result.join(','));
