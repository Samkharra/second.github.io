// SCROLL NAVBAR
// window.addEventListener("scroll", () => {
//   document
//     .getElementsByClassName("header")
//     .classList.toggle("window-scroll", window.scrollY > 0);
// });

// for (let i = 0; i < 10; i++) {
//   console.log("hello");
// }

// const arr = [1, 2, 5, 7, 33, 51, 65];

// for (let numbers of arr) {
//   numbers++;
//   console.log(numbers);
// }

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }
// console.log(sum(10, 10, 15, 20, 25));

// const arr = [1, 2, 3, 4, 5, 6, 7];
// let [a, b, c, d, ...other] = arr;
// const fakeA = arr[0];

const arr = [1, 2, 3, 4, 5, 6];

let counter = 0;

function test(item, index, array) {
  array[index] = item * 2;
}
arr.forEach(test);
console.log(arr);
