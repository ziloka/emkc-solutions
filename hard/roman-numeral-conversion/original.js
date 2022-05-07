const s = process.argv[2];

// write your solution here
let values = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
let sum = values[s.charAt(s.length - 1)];
for (let i = s.length - 2; i >= 0; i--) {
  let first = s.charAt(i); 
  let second = s.charAt(i + 1);
  if (values[first] < values[second]) {
    sum -= values[first];
  } else {
    sum += values[first];
  }
}

console.log(sum);