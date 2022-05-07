const value1 = process.argv[2];

// write your solution here
let obj = {};
for (let letter of value1) obj[letter] = obj[letter] == undefined ? 0 : obj[letter]+1;

let result = [];
let longest = { letter: '', numOfTimesSeen: 0 };
for (let letter of [...new Set(value1.split(''))]) {
    if (obj[letter] > longest.numOfTimesSeen) {
        longest = { letter, numOfTimesSeen: obj[letter] };
        result = [ letter ];
    } else if(obj[letter] == longest.numOfTimesSeen) {
        result.push(letter);
    }
}

console.log(result.join(','));