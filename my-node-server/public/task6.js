const calcNum = (a, b) => {
  sum = a + b;
  console.log(sum);
};

// function getRandomNum(arr) {
//   let total = Math.random;
//   for (let i = 0; i < arr.length; i++) {
//     sum += i;
//     console.log(sum);
//   }
// }
// getRandomNum(num);
const num = [2, 5, 8, 7, 8, 3, 6];
const arrLength = num.length;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(arrLength));

// console.log(getRandomInt(3));
// // Expected output: 0, 1 or 2

// console.log(getRandomInt(1));
// // Expected output: 0

// calcNum(5, 2);
// console.log(arrLength);

// console.log(Math.random() * arrLength * 100);
// Expected output: a number from 0 to <1
