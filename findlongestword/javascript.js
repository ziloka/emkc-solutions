const value1 = process.argv[2];

// write your solution here
let arr = value1.split(',').map((str) => str.trim().toLowerCase());
let result = [''];
for (let word of arr) {
    if (result[0].length < word.length) result = [word];
    else if(result[0].length === word.length) result.push(word);
}
console.log(result.join(','));
