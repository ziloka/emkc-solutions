const [ cookie, cookieJar ] = process.argv[2].split(',');

// write your solution here
let startIndex = cookieJar.indexOf(cookie);
console.log((startIndex+(startIndex+cookie.length))-1);