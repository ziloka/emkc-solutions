const [ word, permutation ] = process.argv[2].split(',');

// write your solution here
let result = {};
let temp = {};
let isPermutation = true;
for (let letter of word) result[letter] = result[letter] == undefined ? 1 : result[letter]+1;
for (let letter of permutation) temp[letter] = temp[letter] == undefined ? 1 : temp[letter]+1;
for (let letter of word) {
    if (result[letter] != temp[letter]) {
        isPermutation = false;
        break;
    }
}

console.log(isPermutation ? 'Yes' : 'No');