// // Split words and put them into an array
// function stringToArray(string) {
//   return string.split(" ");
// }

// // Grabs any string and multiplies it by 25 with it set as a default parameter
// function billboardCost(name, b = 25) {
//   let price = 0;
//   for (let i = 0; i < name.length; i++) price += b;
//   console.log(price);
// }

// billboardCost("Hector Pacheco-Campos");

// // Removes every even index in an array
// const arr = [1, 2, 3, 4, 5, 6];

// const x = arr.filter((element, index) => {
//   return index % 2 === 0;
// });

// console.log(x);

// // Checks if a number is less than 5, if it is then make it 0, if its greater than, make it 1
// const x = "232183703".split("");

// x.forEach(function (element, index) {
//   element < 5 ? (x[index] = "0") : (x[index] = "1");
// });

// console.log(x.join(""));

// // Makes every "T" into a "U" inside a string
// const x = "ABTUT".split("");

// x.forEach((element, index) => {
//   if (x[index] === "T") {
//     x[index] = "U";
//   }
// });

// console.log(x);
