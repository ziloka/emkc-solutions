const value1 = process.argv[2];

// write your solution here
let words = value1.split(' ');
let vowels = ['a', 'e', 'i', 'o', 'u']
let result = '';
for (let word of words) {
    if (word.endsWith('yay')) {
        result = result + word.slice(0, word.length - 3) + ' ';
    } else {
        word = word.slice(0, word.length - 2);
        let consonantSequence = '';
        for (let i = word.length-1; i > 0; --i) {
            if (!vowels.includes(word[i]) && word[i] != '-') {
                consonantSequence = word[i] + consonantSequence;
            } else {
                break;
            }
        }
        word = word.slice(word.length-consonantSequence.length) + word.slice(0, word.length-consonantSequence.length-1);
        result = result + word + ' ';
    }
}
console.log(result);
