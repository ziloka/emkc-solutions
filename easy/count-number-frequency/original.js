const value1 = process.argv[2];

// write your solution here
let obj = {};
for (let num of value1.split('')) {
    obj[num] = obj[num] == undefined ? 0 : obj[num]+1;
}

let arr = Object.keys(obj);
let result = { key: arr[0], value: obj[arr[0]] };
for (let key of arr) {
    if (result.value < obj[key]) {
        result = { key, value: obj[key] };
    }
}
console.log(result.key);
