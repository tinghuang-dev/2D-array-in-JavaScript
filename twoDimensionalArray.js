const rows = 10;
const columns = 8;

// const myArray = new Array(rows);
// console.log(myArray);

const myArray1 = [];

for (let i = 0; i < rows; i++) {
  myArray1[i] = [];
  for (let j = 0; j < columns; j++) {
    myArray1[i][j] = null;
  }
}

// console.log(myArray1);

// do a little bit less code

const myArray2 = new Array(rows);

for (let i = 0; i < myArray2.length; i++) {
  myArray2[i] = new Array(columns);
}

// console.log(myArray2);

//

const myArray3 = Array.from(Array(rows), () => new Array(columns));

// console.log(myArray3);

const myArray5 = new Array(rows).fill().map(() => Array(columns));
// console.log(myArray5);

const arr = new Array(3);

for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(4).fill(2); // Creating an array of size 4 and filled of 1
}

console.log(arr);

arr[0][0] = 10;
console.log(arr[0][0]); // 10
console.log(arr[1][0]); // 1
console.log(arr[2][0]); // 1
