// ### Exercises:Level 1

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries1 = ["Finland", "Sweden", "Norway"];

// 1. Create an empty set
const set = new Set();

console.log(set);

// 2. Create a set containing 0 to 10 using loop
const nums = new Set();

for (let i = 0; i < 11; i++) {
  nums.add(i);
}

console.log(nums);

// 3. Remove an element from a set
nums.delete(3);

console.log(nums);

// 4. Clear a set
nums.clear();

console.log(nums);

// 5. Create a set of 5 string elements from array
const array = ["one", "two", "three", "four", "five"];
const arraySet = new Set(array);

console.log(arraySet);

// 6. Create a map of countries and number of characters of a country
const countriesMap = new Map();

countries.forEach((item) => countriesMap.set(item.name, item.name.length));

console.log(countriesMap);

// ### Exercises:Level 2

// 1. Find a union b
const union = new Set([...a, ...b]);

console.log(union);

// 2. Find a intersection b
const setFromB = new Set(b);
const intersection = a.filter((item) => setFromB.has(item));

console.log(intersection);

// 3. Find a with b
const differece = a.filter((item) => !setFromB.has(item));

console.log(differece);

// ### Exercises:Level 3

// 1. How many languages are there in the countries object file.
const langArr = [];
countries.forEach((item) =>
  item.languages.forEach((item) => langArr.push(item))
);
const languagesCount = new Set(langArr);

console.log(languagesCount);

// 2. \*\*\* Use the countries data to find the 10 most spoken languages:
//    // Your output should look like this
//    console.log(mostSpokenLanguages(countries, 10))
//    [
//      { English: 91 },
//      { French: 45 },
//      { Arabic: 25 },
//      { Spanish: 24 },
//      { Russian: 9 },
//      { Portuguese: 9 },
//      { Dutch: 8 },
//      { German: 7 },
//      { Chinese: 5 },
//      { Swahili: 4 },
//      { Serbian: 4 }
//    ]

//   // Your output should look like this
//   console.log(mostSpokenLanguages(countries, 3))
//   [
//   {English:91},
//   {French:45},
//   {Arabic:25}
//   ]
function mostSpokenLanguages(arr, num) {
  let langArr = [],
    langCount = [];

  arr.forEach((item) => item.languages.forEach((item) => langArr.push(item)));

  const langsSet = new Set(langArr);

  langsSet.forEach((item) =>
    langCount.push({
      country: item,
      count: langArr.filter((element) => element === item).length,
    })
  );

  return langCount.sort((a, b) => b.count - a.count).slice(0, num);
}

console.table(mostSpokenLanguages(countries, 10));
