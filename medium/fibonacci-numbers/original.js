const value1 = parseInt(process.argv[2]);
const value2 = parseInt(process.argv[3]);

// write your solution here
let result = [];
let n1 = 1;
let n2 = 1;
let tempSum = 0;
while (result.length != value2) {
    if (value1 <= tempSum) result.push(n1+n2); 
    tempSum = n1 + n2;
    n1 = n2;
    n2 = tempSum;
}
console.log(result.join(','));