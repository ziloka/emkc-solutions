const value1 = process.argv[2];

// write your solution here
let a = +(value1.match(/^-?\d+/)?.[0] ?? 1)
let b = +(value1.match(/(?<=x\^2)[\+-]\d+/)?.[0] ?? 1);
let c = +(value1.match(/-?\d(?==\d$)/)?.[0] ?? 1);

let discriminant = Math.sqrt((b ** 2) - (4 * (a * c)));
let denominator = 2 * a;

let solution1 = ((-b)+discriminant)/denominator;
let solution2 = ((-b)-discriminant)/denominator;

// solutions are rounded to hundred thousandths
let display = (num) => !isNaN(discriminant) ? Math.trunc(num * 100000) / 100000 : 'imaginary';
console.log(`${display(solution1)},${display(solution2)}`);
