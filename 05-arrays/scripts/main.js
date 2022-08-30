// Exercise: Level 1
// 1. Declare an _empty_ array;
const arr = [];
console.log(arr);
// 2. Declare an array with more than 5 number of elements
const arr1 = Array(6).fill("one");
console.log(arr1);
// 3. Find the length of your array
console.log(arr1.length);
// 4. Get the first item, the middle item and the last item of the array
console.log(arr1[0], arr1[3], arr1[5]);
// 5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should  be greater than 5
const mixedDataTypes = ["string", 34, true, [3, 4, 5], false, null, undefined];
console.log(mixedDataTypes.length);
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// 7. Print the array using _console.log()_
console.log(itCompanies);
// 8. Print the number of companies in the array
console.log(itCompanies.length);
// 9. Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[3], itCompanies[6]);
// 10. Print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);
// 11. Change each company name  to uppercase one by one and print them out
console.log(itCompanies[1].toUpperCase());
// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(", ").concat(" are big IT companies."));
// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
const company = "IBM";
console.log(
  itCompanies.includes(company) === true ? company : "A company is not found."
);
// 14. Filter out companies which have more than one 'o' without the filter method
let array = [];
itCompanies.forEach((item) => {
  let oCount = 0;
  for (i = 0; i < item.length; i++) {
    if (item[i] == "o") {
      oCount++;
      if (oCount >= 2) {
        array.push(item);
      }
    }
  }
});
console.log(array);
// 15. Sort the array using _sort()_ method
console.log(itCompanies.sort());
// 16. Reverse the array using _reverse()_ method
console.log(itCompanies.reverse());
// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));
// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(4));
// 19. Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3, 4));
// 20. Remove the first IT company from the array
console.log(itCompanies.shift(0));
console.log(itCompanies);
// 21. Remove the middle IT company or companies from the array
console.log(itCompanies.splice(2, 2));
console.log(itCompanies);
// 22. Remove the last IT company from the array
console.log(itCompanies.pop());
console.log(itCompanies);
// 23. Remove all IT companies
console.log(itCompanies.splice(0, itCompanies.length));
console.log(itCompanies);

// Exercise: Level 2
// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
console.log(countries);
console.log(webTechs);

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const _arr = text.replace(/[^a-z\s]/gi, "").split(" ");
console.log(_arr);
console.log(_arr.length);
// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// * add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat");
console.log(shoppingCart);
// * add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar");
console.log(shoppingCart);
// * remove 'Honey' if you are allergic to honey
shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
console.log(shoppingCart);
// * modify Tea to 'Green Tea'
shoppingCart.splice(shoppingCart.indexOf("Tea"), 1, "Green Tea");
console.log(shoppingCart);

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
console.log(countries.includes("Ethiopia")); // true
console.log(countries[countries.indexOf("Ethiopia")].toUpperCase());

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
console.log(webTechs.includes("Sass")); // false
webTechs.push("Sass");
console.log(webTechs[webTechs.indexOf("Sass")].concat(" is a CSS preprocess"));

// 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// Exercise: Level 3
// 1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// * Sort the array and find the min and max age
const sortedAges = ages.sort((a, b) => a - b);
console.log(sortedAges[0]);
// * Find the median age(one middle item or two middle items divided by two)
console.log(
  (sortedAges[Math.floor(ages.length / 2)] +
    sortedAges[Math.ceil(ages.length / 2)]) /
    2
); // 24
// * Find the average age(all items divided by number of items)
const avarageAge = ages.reduce((a, b) => a + b) / ages.length;
console.log(avarageAge); // 22.8
// * Find the range of the ages(max minus min)
console.log(Math.max(...ages) - Math.min(...ages)); // 7
// * Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
console.log(Math.abs(Math.min(...ages) - avarageAge)); // 3.8
console.log(Math.abs(Math.max(...ages) - avarageAge)); // 3.19

// 2.Slice the first ten countries from the countries array
console.log(countries.slice(0, 10));
// 3. Find the middle country(ies) in the countries array
console.log(
  countries[Math.floor(countries.length / 2)],
  countries[Math.ceil(countries.length / 2)]
);
// 4. Divide the countries array into two equal arrays if it is even. If countries array is not even, one more country for the first half
let arr2 = [];
let arr3 = [];
if (countries.length % 2 === 0) {
  arr2 = countries.slice(0, countries.length / 2);
  arr3 = countries.slice(countries.length / 2 + 1, countries.length + 1);
} else {
  arr2 = countries.slice(0, Math.ceil(countries.length / 2));
  arr3 = countries.slice(Math.ceil(countries.length / 2), countries.length + 1);
}

console.log(countries.length);
console.log(arr2.length);
console.log(arr3.length);
