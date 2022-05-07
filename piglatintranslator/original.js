const value1 = process.argv[2];

// write your solution here
let words = value1.split(' ');
let vowels = ['a', 'e', 'i', 'o', 'u']
let result = '';
for (let word of words) {
    if (word.endsWith('yay')) {
        word = word.slice(0, word.length - 3);
        result = result + ' ' + word;
    } else {
        word = word.slice(0, word.length - 2);
        let consonantSequence = '';
        for (let i = word.length-1; i > 0; --i) {
            if (!vowels.includes(word[i])) {
                consonantSequence = word[i] + consonantSequence;
            } else {
                break;
            }
        }
        word = word.slice(word.length-2) + word.slice(0, word.length-2);
        result = result + ' ' + word;
    }
}
console.log(result.replace(/-/gmi, ''));

// translate english to pig latin
// let words = value1.split(' ');
// let vowels = ['a', 'e', 'i', 'o', 'u'];
// let result = '';
// for (let word of words) {
//     if (vowels.includes(word[0])) {
//       result = result + ' ' + word + 'yay';
//     } else {
//       let consonantSequence = '';
//       for (let letter of word) {
//         if (!vowels.includes(word)) {
//           consonantSequence = consonantSequence + letter;
//         } else {
//           break;
//         }
//       }
//       result = result + ' ' + word.slice(consonantSequence.length) + consonantSequence + '-ay';
//     }
// }
