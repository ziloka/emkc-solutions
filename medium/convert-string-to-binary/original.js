const value1 = process.argv[2];

// write your solution here
console.log(value1.split('').map((s) => '0' + s.charCodeAt(0).toString(2)).join(''));
