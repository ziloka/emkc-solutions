const [ date1, date2 ] = process.argv[2].split(',');

// write your solution here
console.log(((((Date.parse(date1)-Date.parse(date2))/1000)/60)/60)/24);