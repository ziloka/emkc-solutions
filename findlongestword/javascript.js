const value1 = process.argv[2];

// write your solution here
let arr = value1.split(',').map((str) => str.trim().toLowerCase());
let result = [];
let longest = '';
for (let word of arr) {
    if (longest.length < word.length) {
        longest = word;
        result = [longest];
    } else if(longest.length == word.length) {
        result.push(word);
    }
}
console.log(result.join(','));
