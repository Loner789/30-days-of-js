// Exercises: Level 1
// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let j = 0;
// do {
//   console.log(j);
//   j++;
// } while (j <= 10);

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }

// let j = 10;
// do {
//   console.log(j);
//   j--;
// } while (j >= 0);

// 3. Iterate 0 to n using for loop
n = 5;
for (let i = 0; i <= n; i++) {
  console.log(i);
}

// 4. Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######
let string = "#";

while (string.length < 8) {
  console.log(string);
  string += "#";
}

// 5. Use loop to print the following pattern:
//    0 x 0 = 0
//    1 x 1 = 1
//    2 x 2 = 4
//    3 x 3 = 9
//    4 x 4 = 16
//    5 x 5 = 25
//    6 x 6 = 36
//    7 x 7 = 49
//    8 x 8 = 64
//    9 x 9 = 81
//    10 x 10 = 100
let num = 0;

while (num < 11) {
  console.log(`${num} x ${num} = ${num * num}`);
  num++;
}

// 6. Using loop print the following pattern
//     i    i^2   i^3
//     0    0     0
//     1    1     1
//     2    4     8
//     3    9     27
//     4    16    64
//     5    25    125
//     6    36    216
//     7    49    343
//     8    64    512
//     9    81    729
//     10   100   1000
let i = 0;

while (i < 11) {
  console.log(`${i}\t${i ** 2}\t${i ** 3}`);
  i++;
}

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
for (let i = 1; i <= 100; i++) {
  for (let j = 2; j <= i; j++) {
    if (i % j === 0 && j < i) {
      break;
    } else if (j === i) {
      console.log(i);
    }
  }
}

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
//     The sum of all numbers from 0 to 100 is 5050.
let sum = 0;

for (let i = 0; i <= 100; i++) {
  sum += i;
}

console.log(sum);

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//     The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
let evenSum = 0,
  oddSum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  }
  if (i % 2 !== 0) {
    oddSum += i;
  }
}

console.log(evenSum);
console.log(oddSum);

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
//       [2550, 2500]
let sumArray = [evenSum, oddSum];

console.log(sumArray);

// 13. Develop a small script which generate array of 5 random numbers
let arr = [],
  number = 1;

while (number <= 5) {
  const rand = Math.floor(Math.random() * 10);
  arr.push(number * rand);
  number++;
}

console.log(arr);

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
for (let i = 0; i < arr.length; i++) {
  for (let j = arr[i + 1]; j < arr.length; j++)
    if (arr[i] === arr[j]) {
      arr[i] = arr[i] * 11;
    }
}

console.log(arr);

// 15. Develop a small script which generate a six characters random id:
//     5j2khz
let result = "",
  char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

for (let i = 0; i < 6; i++) {
  result += char[Math.floor(Math.random() * char.length)];
}

console.log(result);

// Exercises: Level 2
// 1. Develop a small script which generate any number of characters random id:
let _result = "",
  _char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

for (let i = 0; i < Math.floor(Math.random() * 1000); i++) {
  _result += _char[Math.floor(Math.random() * _char.length)];
}

console.log(_result);

// 2. Write a script which generates a random hexadecimal number.
let res = "",
  chars = "0123456789abcdef";

for (let i = 0; i < 6; i++) {
  res += chars[Math.floor(Math.random() * chars.length)];
}

console.log(`#${res}`);

// 3. Write a script which generates a random rgb color number.
let r = Math.floor(Math.random() * (255 + 1));
let g = Math.floor(Math.random() * (255 + 1));
let b = Math.floor(Math.random() * (255 + 1));
let rgb = `rgb(${r},${g},${b})`;

console.log(rgb);

// 4. Using the above countries array, create the following new array.
let coutries2 = [];

for (let i = 0; i < countries.length; i++) {
  coutries2.push(countries[i].toLocaleUpperCase());
}

console.log(coutries2);

// 5. Using the above countries array, create an array for countries length.
let countriesLength = [];

for (let i = 0; i < countries.length; i++) {
  countriesLength.push(countries[i].length);
}

console.log(countriesLength);

// 6. Use the countries array to create the following array of arrays:
let countriesArr = [];

for (let i = 0; i < countries.length; i++) {
  countriesArr.push([
    countries[i],
    coutries2[i].slice(0, 3),
    countriesLength[i],
  ]);
}

console.log(countriesArr);

// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let countriesWithLand = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) {
    countriesWithLand.push(countries[i]);
  }
}

countriesWithLand
  ? console.log(countriesWithLand)
  : console.log("All these countries are without land");

// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let countriesWithIa = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("ia")) {
    countriesWithIa.push(countries[i]);
  }
}

countriesWithLand
  ? console.log(countriesWithIa)
  : console.log("These are countries ends without ia");

// 9. Using the above countries array, find the country containing the biggest number of characters.
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === Math.max(...countriesLength)) {
    console.log(countries[i]);
  }
}

// 10. Using the above countries array, find the country containing only 5 characters.
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 5) {
    console.log(countries[i]);
  }
}

// 11. Find the longest word in the webTechs array
console.log(webTechs.sort((a, b) => b.length - a.length)[0]);

// 12. Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
let webTechArr = [];

for (let i = 0; i < webTechs.length; i++) {
  webTechArr.push([webTechs[i], webTechs[i].length]);
}

console.log(webTechArr);

// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ["MongoDB", "Express", "React", "Node"];
let acro = [];

for (let i = 0; i < mernStack.length; i++) {
  acro.push(mernStack[i].slice(0, 1));
}

console.log(acro.join(""));

// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
webTechs.push("Express");
// * for loop
// for (let i = 0; i < webTechs.length; i++) {
//   console.log(webTechs[i]);
// }

// * whlie loop
// let tech = 0;
// while (tech < webTechs.length) {
//   console.log(webTechs[tech]);
//   tech++;
// }

// * do whlie loop
// let tech = 0;
// do {
//   console.log(webTechs[tech]);
//   tech++;
// } while (tech < webTechs.length);

// * for of loop
for (tech of webTechs) {
  console.log(tech);
}

// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruitArray = ["banana", "orange", "mango", "lemon"];
let reversed = [];

for (let i = fruitArray.length - 1; i >= 0; i--) {
  reversed.push(fruitArray[i]);
}

console.log(reversed);

// 16. Print all the elements of array as shown below.
// HTML
// CSS
// JS
// REACT
// NODE
// EXPRESS
// MONGODB
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j].toLocaleUpperCase());
  }
}

// Exercises: Level 3
// 1. Copy countries array(Avoid mutation)
const countries2 = countries;
console.log(countries2);

// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const sortedCountries = countries.sort((a, b) => a.length - b.length);
console.log(sortedCountries);

// 3. Sort the webTechs array and mernStack array
const sortedWebTechs = webTechs.sort((a, b) => a.length - b.length);
console.log(sortedWebTechs);

const sortedMernStack = mernStack.sort((a, b) => a.length - b.length);
console.log(sortedMernStack);

// 4. Extract all the countries contain the word 'land' from the countries array and print it as array
const lands = [];

countries.forEach((item) => {
  if (item.includes("land")) {
    lands.push(item);
  }
});

console.log(lands);

// 5. Find the country containing the hightest number of characters in the countries array
console.log(Math.max(...countriesLength));

// 6. Extract all the countries contain the word 'land' from the countries array and print it as array
console.log(lands);

// 7. Extract all the countries containing only four characters from the countries array and print it as array
const fourCharCountries = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 4) {
    fourCharCountries.push(countries[i]);
  }
}

console.log(fourCharCountries);

// 8. Extract all the countries containing two or more words from the countries array and print it as array
const fewWordsCountries = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes(" ")) {
    fewWordsCountries.push(countries[i]);
  }
}

console.log(fewWordsCountries);

// 9. Reverse the countries array and capitalize each country and stored it as an array
const reversedCountries = countries.reverse();
let reversedCapitalizedCountries = [];

for (let i = 0; i < reversedCountries.length; i++) {
  reversedCapitalizedCountries.push(reversedCountries[i].toLocaleUpperCase());
}

console.log(reversedCapitalizedCountries);
