// Exercises: Level 1

// 1. Declare a function _fullName_ and it print out your full name.
function fullName() {
  return "Dmitry Malinovskiy";
}
console.log(fullName());

// 2. Declare a function _fullName_ and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName1(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullName1("Dmitry", "Malinovskiy"));

// 3. Declare a function _addNumbers_ and it takes two parameters and it returns sum.
const addNumbers = (a, b) => a + b;
console.log(addNumbers(3, 5));

// 4. An area of a rectangle is calculated as follows: _area = length x width_. Write a function which calculates _areaOfRectangle_.
const areaOfRectangle = (length, width) => length * width;
console.log(areaOfRectangle(4, 5));

// 5. A perimeter of a rectangle is calculated as follows: _perimeter= 2x(length + width)_. Write a function which calculates _perimeterOfRectangle_.
const perimeterOfRectangle = (length, width) => 2 * (length + width);
console.log(perimeterOfRectangle(4, 5));

// 6. A volume of a rectangular prism is calculated as follows: _volume = length x width x height_. Write a function which calculates _volumeOfRectPrism_.
const volumeOfRectPrism = (length, width, height) => length * width * height;
console.log(volumeOfRectPrism(4, 5, 8));

// 7. Area of a circle is calculated as follows: _area = π x r x r_. Write a function which calculates _areaOfCircle_
const areaOfCircle = (r) => 3.14 * r * r;
console.log(areaOfCircle(4));

// 8. Circumference of a circle is calculated as follows: _circumference = 2πr_. Write a function which calculates _circumOfCircle_
const circumOfCircle = (r) => 2 * 3.14 * r;
console.log(circumOfCircle(4));

// 9. Density of a substance is calculated as follows:_density= mass/volume_. Write a function which calculates _density_.
const density = (mass, volume) => mass / volume;
console.log(density(4, 6));

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, _speed_.
const speed = (distance, time) => distance / time;
console.log(speed(14, 6));

// 11. Weight of a substance is calculated as follows: _weight = mass x gravity_. Write a function which calculates _weight_.
const weight = (mass, gravity = 7.8) => mass * gravity;
console.log(weight(14));

// 12. Temperature in oC can be converted to oF using this formula: _oF = (oC x 9/5) + 32_. Write a function which convert oC to oF _convertCelsiusToFahrenheit_.
const convertCelsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
console.log(convertCelsiusToFahrenheit(0));

// 13. Body mass index(BMI) is calculated as follows: _bmi = weight in Kg / (height x height) in m2_. Write a function which calculates _bmi_. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is _underweight, normal, overweight_ or _obese_ based the information given below.
//     - The same groups apply to both men and women.
//     - _Underweight_: BMI is less than 18.5
//     - _Normal weight_: BMI is 18.5 to 24.9
//     - _Overweight_: BMI is 25 to 29.9
//     - _Obese_: BMI is 30 or more
function bmi(weight, height) {
  const bmi = Math.ceil(weight / (height * height));
  if (bmi < 18.5) {
    return "Underweight";
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal weight";
  }
  if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

console.log(bmi(72, 1.71));

// 14. Write a function called _checkSeason_, it takes a month parameter and returns the season: Autumn, Winter, Spring or Summer.
function checkSeason(month) {
  let monthToLowerCase = month.toLowerCase();
  switch (true) {
    case monthToLowerCase === "december" ||
      monthToLowerCase === "january" ||
      monthToLowerCase === "february":
      return "Winter";
      break;
    case monthToLowerCase === "march" ||
      monthToLowerCase === "april" ||
      monthToLowerCase === "may":
      return "Spring";
      break;
    case monthToLowerCase === "june" ||
      monthToLowerCase === "july" ||
      monthToLowerCase === "august":
      return "Summer";
      break;
    case monthToLowerCase === "september" ||
      monthToLowerCase === "october" ||
      monthToLowerCase === "november":
      return "Autumn";
      break;
    default:
      return "Wrong input.";
  }
}

console.log(checkSeason("decembEr"));

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(a, b, c) {
  if (a > b && a > c) return a;
  if (b > a && b > c) return b;
  else return c;
}

console.log(findMax(5, 8, 33));

// Exercises: Level 2

// 1. Linear equation is calculated as follows: _ax + by + c = 0_. Write a function which calculates value of a linear equation, _solveLinEquation_.
function solveLinEquation(a, b, c) {
  return `x = (${-b}y - ${c}) / ${a};\ny = (${-a}x - ${c}) / ${b}`;
}

console.log(solveLinEquation(2, 4, 7));
// 2. Quadratic equation is calculated as follows: _ax2 + bx + c = 0_. Write a function which calculates value or values of a quadratic equation, _solveQuadEquation_.
function solveQuadEquation(a, b, c) {
  if (a === 0) return "Error";
  let D = b * b - 4 * a * c;
  let x1, x2;
  if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    return { x1, x2 };
  } else if (D === 0) {
    x1 = -b / (2 * a);
    return { x1 };
  } else {
    return "No roots";
  }
}

console.log(solveQuadEquation(1, -1, 0));

// 3. Declare a function name _printArray_. It takes array as a parameter and it prints out each value of the array.
const printArray = (arr) => {
  for (item of arr) {
    console.log(item);
    item++;
  }
};
// const printArray = (arr) => arr.forEach(item => console.log(item));

printArray(countries);
// 4. Write a function name _showDateTime_ which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getUTCFullYear();
  let hours = date.getHours();
  let mins = date.getMinutes();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  return `${day}/${month}/${year} ${hours}:${mins}`;
}

console.log(showDateTime());

// 5. Declare a function name _swapValues_. This function swaps value of x to y.
const swapValues = (x, y) => {
  return `x = ${y}, y = ${x}`;
};

console.log(swapValues(3, 6));

// 6. Declare a function name _reverseArray_. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

// function reverseArray(arr) {
//   let newArr = [];
//
//   for (let i = 0; i < arr.length; i++) {
//     newArr.unshift(arr[i]);
//   }
//   return newArr;
// }

console.log(reverseArray(countries));

// 7. Declare a function name _capitalizeArray_. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr) {
  let newArr = arr.map((element) => element.toUpperCase());

  return newArr;
}

// function capitalizeArray(arr) {
//   let newArr = [];

//   arr.forEach((element) => {
//     newArr.push(element.toUpperCase());
//   });

//   return newArr;
// }

console.log(capitalizeArray(countries));

// 8. Declare a function name _addItem_. It takes an item parameter and it returns an array after adding the item
function addItem(arr, item) {
  arr.push(item);

  return arr;
}

console.log(addItem([1, 2, 3, 4, 5], 234));

// 9. Declare a function name _removeItem_. It takes an index parameter and it returns an array after removing an item
function removeItem(arr, index) {
  arr.splice(index, 1);

  return arr;
}

console.log(removeItem([1, 2, 3, 4, 5, 6, 7], 4));

// 10. Declare a function name _sumOfNumbers_. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(arr, number) {
  for (let i = 1; i <= number; i++) {
    arr.push(i);
  }

  return arr;
}

console.log(sumOfNumbers([1, 2, 3, 4, 5, 6, 7], 18));

// 11. Declare a function name _sumOfOdds_. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(arr, number) {
  for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }

  return arr;
}

console.log(sumOfOdds([1, 2, 3, 4, 5, 6, 7], 18));

// 12. Declare a function name _sumOfEven_. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(arr, number) {
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }

  return arr;
}

console.log(sumOfEven([1, 2, 3, 4, 5, 6, 7], 18));

// 13. Declare a function name evensAndOdds. It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(number) {
  let odds = [],
    evens = [];

  for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0) {
      odds.push(i);
    } else {
      evens.push(i);
    }
  }

  return `The number of odds are ${odds.length}.\nThe number of evens are ${evens.length}.`;
}

console.log(evensAndOdds(563));

// 14. Write a function which takes any number of arguments and return the sum of the arguments
function sumOfArgs() {
  let res = 0;

  for (let i = 0; i <= arguments.length; i++) {
    res += i;
  }

  return res;
}

console.log(sumOfArgs(1, 2, 3, 4, 5, 6, 7));

// 15. Write a function which generates a _randomUserIp_.
function randomUserIp() {
  let num1 = Math.floor(Math.random() * 255);
  let num2 = Math.floor(Math.random() * 255);
  let num3 = Math.floor(Math.random() * 255);
  let num4 = Math.floor(Math.random() * 255);

  return `${num1}.${num2}.${num3}.${num4}`;
}

console.log(randomUserIp());

// 16. Write a function which generates a _randomMacAddress_
function randomMacAddress() {
  let chars = "ABCDE0123456789";

  let num1 =
    chars[Math.floor(Math.random() * chars.length)] +
    chars[Math.floor(Math.random() * chars.length)];
  let num2 =
    chars[Math.floor(Math.random() * chars.length)] +
    chars[Math.floor(Math.random() * chars.length)];
  let num3 =
    chars[Math.floor(Math.random() * chars.length)] +
    chars[Math.floor(Math.random() * chars.length)];
  let num4 =
    chars[Math.floor(Math.random() * chars.length)] +
    chars[Math.floor(Math.random() * chars.length)];
  let num5 =
    chars[Math.floor(Math.random() * chars.length)] +
    chars[Math.floor(Math.random() * chars.length)];
  let num6 =
    chars[Math.floor(Math.random() * chars.length)] +
    chars[Math.floor(Math.random() * chars.length)];

  return `${num1}-${num2}-${num3}-${num4}-${num5}-${num6}`;
}

console.log(randomMacAddress());

// 17. Declare a function name _randomHexaNumberGenerator_. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator() {
  let res = "",
    chars = "abcde0123456789";

  for (let i = 0; i < 6; i++) {
    res += chars[Math.floor(Math.random() * chars.length)];
  }

  return `#${res}`;
}

console.log(randomHexaNumberGenerator());

// 18. Declare a function name _userIdGenerator_. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
  let res = "",
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 10; i++) {
    res += chars[Math.floor(Math.random() * chars.length)];
  }

  return `User id: ${res}`;
}

console.log(userIdGenerator());

// Exercises: Level 3

// 1. Modify the _userIdGenerator_ function. Declare a function name _userIdGeneratedByUser_. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGeneratedByUser() {
  let res = "",
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    nums = prompt("Введите количество символов ID:", 12),
    quantity = prompt("Введите количество ID:", 3);
  function userIdGenerator() {
    for (let i = 0; i < nums; i++) {
      res += chars[Math.floor(Math.random() * chars.length)];
    }

    return res;
  }

  for (let i = 0; i < quantity; i++) {
    console.log(userIdGenerator());
    res = "";
  }
}

// userIdGeneratedByUser();

// 2. Write a function name _rgbColorGenerator_ and it generates rgb colors.
function rgbColorGenerator() {
  let r = Math.floor(Math.random() * (255 + 1));
  let g = Math.floor(Math.random() * (255 + 1));
  let b = Math.floor(Math.random() * (255 + 1));
  let rgb = `rgb(${r},${g},${b})`;

  return rgb;
}

console.log(rgbColorGenerator());

// 3. Write a function **_arrayOfHexaColors_** which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(num) {
  let arr = [];

  function randomHexaNumberGenerator() {
    let res = "",
      chars = "abcde0123456789";

    for (let i = 0; i < 6; i++) {
      res += chars[Math.floor(Math.random() * chars.length)];
    }

    return `#${res}`;
  }

  for (let i = 0; i < num; i++) {
    arr.push(randomHexaNumberGenerator());
  }
  return arr;
}

console.log(arrayOfHexaColors(4));

// 4. Write a function **_arrayOfRgbColors_** which return any number of RGB colors in an array.
function arrayOfRgbColors(num) {
  let arr = [];

  function rgbColorGenerator() {
    let r = Math.floor(Math.random() * (255 + 1));
    let g = Math.floor(Math.random() * (255 + 1));
    let b = Math.floor(Math.random() * (255 + 1));
    let rgb = `rgb(${r},${g},${b})`;

    return rgb;
  }

  for (let i = 0; i < num; i++) {
    arr.push(rgbColorGenerator());
  }
  return arr;
}

console.log(arrayOfRgbColors(5));

// 5. Write a function **_convertHexaToRgb_** which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

console.log(convertHexaToRgb("#34ff45"));

// 6. Write a function **_convertRgbToHexa_** which converts rgb to hexa color and it returns an hexa color.
function convertRgbToHexa(r, g, b) {
  function componentToHex(component) {
    let hex = component.toString(16);

    return hex.length == 1 ? "0" + hex : hex;
  }

  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

console.log(convertRgbToHexa(255, 34, 11));

// 7. Write a function **_generateColors_** which can generate any number of hexa or rgb colors.
function generateColors(system, quantity) {
  function randomHexaNumberGenerator() {
    let res = "",
      chars = "abcde0123456789";

    for (let i = 0; i < 6; i++) {
      res += chars[Math.floor(Math.random() * chars.length)];
    }

    return `#${res}`;
  }

  function rgbColorGenerator() {
    let r = Math.floor(Math.random() * (255 + 1));
    let g = Math.floor(Math.random() * (255 + 1));
    let b = Math.floor(Math.random() * (255 + 1));
    let rgb = `rgb(${r},${g},${b})`;

    return rgb;
  }

  if (system === "hexa") {
    for (let i = 0; i < quantity; i++) {
      console.log(randomHexaNumberGenerator());
    }
  }
  if (system === "rgb") {
    for (let i = 0; i < quantity; i++) {
      console.log(rgbColorGenerator());
    }
  }
}

generateColors("rgb", 4);
generateColors("hexa", 3);

// 8. Call your function _shuffleArray_, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * arr.length);
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
}

console.log(shuffleArray([1, 2, 3, 4, 5]));

// 9. Call your function _factorial_, it takes a whole number as a parameter and it return a factorial of the number
function factorial(n) {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res *= i;
  }

  return res;
}

console.log(factorial(6));

// 10. Call your function _isEmpty_, it takes a parameter and it checks if it is empty or not
const isEmpty = (parameter) =>
  parameter !== undefined && parameter !== null ? "Is not empty" : "Is empty";

let emptyVar;

console.log(isEmpty(emptyVar));

// 11. Call your function _sum_, it takes any number of arguments and it returns the sum.
function sum() {
  let res = 0;

  for (let i = 0; i <= arguments.length; i++) {
    res += i;
  }

  return res;
}

console.log(sum(1, 2, 3, 4, 5));

// 12. Write a function called _sumOfArrayItems_, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(arr) {
  let res = 0;

  for (let item of arr) {
    if (typeof item !== "number") {
      return "Not all items of array are numbers!";
    }
    res += item;
    item++;
  }

  return res;
}

console.log(sumOfArrayItems([1, 2, 3, 4, 5, 6, 7]));

// 13. Write a function called _average_, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(arr) {
  let sum = 0;

  for (let item of arr) {
    if (typeof item !== "number") {
      return "Not all items of array are numbers!";
    }
    sum += item;
    item++;
  }

  return Math.floor(sum / arr.length);
}

console.log(average([1, 2, 3, 4, 5, 6, 7]));

// 14. Write a function called _modifyArray_ takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
function modifyArray(arr) {
  if (arr.length < 5) return "Not Found";
  arr.splice(4, 1, arr[4].toUpperCase());

  return arr;
}

console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);

// 15. Write a function called _isPrime_, which checks if a number is prime number.
function isPrime(num) {
  for (let i = 2; i <= num; i++) {
    if (num % i === 0 && i < num) {
      console.log("Is not a prime number");
      break;
    } else if (i === num) {
      console.log("Is prime");
    }
  }
}

isPrime(83);

// 16. Write a functions which checks if all items are unique in the array.
function isUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        console.log("Not all items are unique.");
        return;
      }
    }
  }
  console.log("All items are unique.");
}

isUnique([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// 17. Write a function which checks if all the items of the array are the same data type.
function sameDataType(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (typeof arr[i] !== typeof arr[j]) {
        console.log("Different data types.");
        return;
      }
    }
  }
  console.log("The same data types.");
}

sameDataType([1, 2, 3, 4, 5, 6, 7, true, 8, 9, 0]);

// 18. JavaScript variable name does not support special characters or symbols except \$ or \_. Write a function **isValidVariable** which check if a variable is valid or invalid variable.
function varValidity(variable) {
  variable.match(/[^\w\$]/gi)
    ? console.log("Variable is not valid.")
    : console.log("Variable is valid.");
}

varValidity("validVariable");

// 19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function sevenNum() {
  let arr = [];

  while (arr.length < 7) {
    let randomNumber = Math.floor(Math.random() * 10);
    if (arr.indexOf(randomNumber) === -1) arr.push(randomNumber);
  }

  return arr;
}

console.log(sevenNum());

// 20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
function reverseCountries(arr) {
  const reversed = arr.reverse();

  return reversed;
}

// function reverseCountries(arr) {
//   let reversed = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }

//   return reversed;
// }

console.log(reverseCountries(countries));
