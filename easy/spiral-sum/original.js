const value1 = process.argv[2];

// write your solution here
// https://code.likeagirl.io/create-a-nxn-matrix-spiral-with-javascript-955ee18402f7
function matrix(n) {
    let result = new Array(n).fill().map(() => new Array(n).fill('')); // create empty n x n array
    let counter = 1;
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = (n*n) - counter + 1;
            counter++;
        }
        startRow++;
        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = (n*n) - counter + 1;
            counter++;
        }
        endCol--;
        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = (n*n) - counter + 1;
            counter++;
        }
        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = (n*n) - counter + 1;
            counter++;
        }
        startCol++;
    }
    return result.map((a) => a.reverse());
}

let arr = matrix(Number(value1.split('x')[0]));
let topLeft = Number(arr[0][0]);
let topRight = Number(arr[0][arr[0].length-1]);
let bottomLeft = Number(arr[arr.length-1][0]);
let bottomRight = Number(arr[arr.length-1][arr.length-1]);
console.log(topLeft+topRight+bottomLeft+bottomRight);
