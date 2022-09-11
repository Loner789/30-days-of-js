// Exercises:Level 1

// 1.  Display the countries array as a table
console.table(countries);

// 2.  Display the countries object as a table
console.table(countries[0]);

// 3.  Use console.group() to group logs
console.group("Countries");
countries.forEach((item) => console.log(item));
console.groupEnd();

// ### Exercises:Level 2

// 1. 10 > 2 \* 10 use console.assert()
console.assert(10 > 2, "10 is greater than 2");

// 2. Write a warning message using console.warn()
console.warn("Warning! Danger zone!");

// 3. Write an error message using console.error()
console.error("Error: You're too good to make mistakes!)");

// ### Exercises:Level 3

// 1. Check the speed difference among the following loops: while, for, for of, forEach
console.time("Regular for loop");
for (let i = 0; i < countries.length; i++) {
  countries[i].name.toUpperCase();
}
console.timeEnd("Regular for loop");

console.time("While loop");
let item = 0;
while(item < countries.length){
    countries[item].name.toUpperCase();
    item++;
}
console.timeEnd("While loop");

console.time("For of loop");
for (const country of countries) {
country.name.toUpperCase();
}
console.timeEnd("For of loop");

console.time("ForEach loop");
countries.forEach(item => item.name.toUpperCase());
console.timeEnd("ForEach loop");
