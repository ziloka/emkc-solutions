const value1 = parseInt(process.argv[2]);
const value2 = parseInt(process.argv[3]);

// write your solution here
function getFibonacciNumbers(start, amount, nums = [], n1 = 1, n2 = 1) {
    if (nums.length == amount) return nums;
    let sum = n1 + n2;
    if (n1 > n2) n2 = sum;
    else n1 = sum;
    if (start < sum) nums.push(sum);
    return getFibonacciNumbers(start, amount, nums, n1, n2);
}

console.log(getFibonacciNumbers(value1, value2).join(','));