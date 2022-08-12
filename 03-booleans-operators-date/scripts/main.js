// Exercises: Level 1
// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = "Dmitry";
const lastName = "Malinovskiy";
const country = "Russia";
const city = "Moscow";
const age = 31;
const isMarried = true;
const year = 2022;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2. Check if type of '10' is equal to 10
console.log("10" === 10); // false

// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") === 10); // false

// 4. Boolean value is either true or false.
//    i. Write three JavaScript statement which provide truthy value.
console.log(isMarried === true); // true
console.log("10" == 10); // true
console.log(parseInt("9.8") !== 10); // true
//    ii. Write three JavaScript statement which provide falsy value.
console.log(typeof firstName === "number"); // false
console.log("10" != 10); // false
console.log(Math.ceil("9.8") !== 10); // false

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != "4"); // false
console.log(4 == "4"); // true
console.log(4 === "4"); // false
// Find the length of python and jargon and make a falsy comparison statement.
console.log("python".length === "jargon".length); // true

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!false); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === "4")); // true
// There is no 'on' in both dragon and python
console.log(!("dragon".includes("on") && "python".includes("on"))); // false

// 7. Use the Date object to do the following activities
const now = new Date();
// What is the year today?
console.log(now.getFullYear());
// What is the month today as a number?
console.log(now.getMonth() + 1);
// What is the date today?
console.log(now.getDate());
// What is the day today as a number?
console.log(now.getDay());
// What is the hours now?
console.log(now.getHours());
// What is the minutes now?
console.log(now.getMinutes());
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime());

// Exercises: Level 2
// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt("Enter base:", 20);
let height = prompt("Enter height:", 10);
const area = 0.5 * +base * +height;
console.log(`The area of the triangle is ${area}`);
// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let a = prompt("Enter side a:", 5);
let b = prompt("Enter side b:", 4);
let c = prompt("Enter side c:", 3);
const perimeter = +a + +b + +c;
console.log(`The perimeter of the triangle is ${perimeter}`);
// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt("Enter length:", 5);
let width = prompt("Enter width:", 5);
const areaOfRectangle = +length * +width;
const perimeterOfRectangle = 2 * (+length + +width);
console.log(`The area of rectangle is ${areaOfRectangle}`);
console.log(`The perimeter of rectangle is ${perimeterOfRectangle}`);
// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt("Enter radius:", 5);
const PI = 3.14;
const areaOfCircle = PI * +radius * +radius;
const circumferenceOfACircle = 2 * PI * +radius;
console.log(`The area of a circle is ${areaOfCircle}`);
console.log(`The circumference of a circle is ${circumferenceOfACircle}`);
// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// 7. Compare the slope of above two questions.
// console.log(slope1 === slope2);
// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// 9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = prompt("Enter hours:", 40);
let rate = prompt("Enter rate per hour:", 28);
const weeklyEarning = +hours * +rate;
console.log(`Your weekly earning is ${weeklyEarning}`);
// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let nameComparing = prompt("Enter your name:");
nameComparing.length > 7
  ? console.log("Your name is long.")
  : console.log("Your name is short.");
// 11. Compare your first name length and your family name length and you should get this output.
firstName.length > lastName
  ? console.log(
      `Your first name, ${firstName} is longer than your family name, ${lastName}`
    )
  : console.log(
      `Your first name, ${firstName} is shorter than your family name, ${lastName}`
    );
// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
const myAge = 35;
const yourAge = 54;
myAge > yourAge
  ? console.log(`I am ${myAge - yourAge} years older than you.`)
  : console.log(`I am ${yourAge - myAge} years younger than you.`);
// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
const userBirthYear = prompt('Enter your birth year:', 1995);
const userAge = now.getFullYear() - +userBirthYear;
userAge >= 18 ? console.log(`You are ${userAge}. You are old enough to drive.`) : console.log(`You are ${userAge}. You will be allowed to drive after ${18 - userAge} years.`)
// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
const userAge2 = prompt('Enter number of years you live:', 19);
console.log(`You lived ${+userAge2 * 31536000} seconds.`);
// 15. Create a human readable time format using the Date time object
// i. YYYY-MM-DD HH:mm
console.log(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`);
// ii. DD-MM-YYYY HH:mm
console.log(`${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`);
// iii. DD/MM/YYYY HH:mm
console.log(`${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`);

// Exercises: Level 3
// 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// i. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
let _year = now.getFullYear();
let _month = now.getMonth() + 1;
let _date = now.getDate();
let _hours = now.getHours();
let _minutes = now.getMinutes();

function updateTime(item) {
    if (item < 10) {
        return `0${item}`;
    }
    return item;
}

_month = updateTime(_month);
_date = updateTime(_date);
_hours = updateTime(_hours);
_minutes = updateTime(_minutes);

console.log(`${_year}-${_month}-${_date} ${_hours}:${_minutes}`);