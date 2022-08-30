// Exercises: Level 1

// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to  wait for the number of years he needs to turn 18.
let userAge = prompt("Enter your age:", 18);
userAge >= 18
  ? console.log("You are old enough to drive.")
  : console.log(`You are left with ${18 - userAge} years to drive.`);

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
const myAge = 31;
let yourAge = prompt("Enter your age:", 18);
if (myAge > yourAge) {
  console.log(`You are ${myAge - yourAge} years younger than me.`);
} else if (myAge < yourAge) {
  console.log(`You are ${yourAge - myAge} years older than me.`);
} else {
  console.log(`We are the same age.`);
}

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// * using if else
const a = 43;
const b = 23;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}
// * ternary operator
a > b ? console.log("a is greater than b") : console.log("a is less than b");

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = prompt("Enter a number:", 18);
+number % 2 === 0
  ? console.log(`${number} is an even number.`)
  : console.log(`${number} is an odd number.`);

// Exercises: Level 2

// 1. Write a code which can give grades to students according to theirs scores:
let score = prompt("Enter your score:", 0);
switch (true) {
  case +score >= 80 && +score < 101:
    console.log('Your grade is "A"');
    break;
  case +score >= 70 && +score < 80:
    console.log('Your grade is "B"');
    break;
  case +score >= 60 && +score < 70:
    console.log('Your grade is "C"');
    break;
  case +score >= 50 && +score < 60:
    console.log('Your grade is "D"');
    break;
  case +score >= 0 && +score < 50:
    console.log('Your grade is "E"');
    break;
  default:
    console.log("Wrong score.");
}

// 2. Check if the season is Autumn, Winter, Spring or Summer.
let input = prompt("Enter current Month:", "August");
const month = input.toLowerCase();
switch (true) {
  case month === "december" || month === "january" || month === "february":
    console.log("The season is Winter");
    break;
  case month === "march" || month === "april" || month === "may":
    console.log("The season is Spring");
    break;
  case month === "june" || month === "july" || month === "august":
    console.log("The season is Summer");
    break;
  case month === "september" || month === "october" || month === "november":
    console.log("The season is Autumn");
    break;
  default:
    console.log("Wrong input.");
}

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
let input2 = prompt("What is the day today?", "Wednesday");
const day = input2.toLocaleLowerCase();
switch (true) {
  case day === "monday" ||
    day === "tuesday" ||
    day === "wednesday" ||
    day === "thursday" ||
    day === "friday":
    console.log(
      `${day.replace(day[0], day[0].toUpperCase())} is a working day.`
    );
    break;
  case day === "saturday" || day === "sunday":
    console.log(`${day.replace(day[0], day[0].toUpperCase())} is a weekend.`);
    break;
  default:
    console.log("Wrong input.");
}

// Exercises: Level 3
// 1. Write a program which tells the number of days in a month.
let input3 = prompt("Enter a month:", "May");
const month1 = input3.toLocaleLowerCase();
if (
  month1 === "december" ||
  month1 === "january" ||
  month1 === "march" ||
  month1 === "may" ||
  month1 === "july" ||
  month1 === "august" ||
  month1 === "october"
) {
  console.log(
    `${month1.replace(month1[0], month1[0].toUpperCase())} has 31 days.`
  );
} else if (month === "february") {
  console.log(
    `${month1.replace(month1[0], month1[0].toUpperCase())} has 28 days.`
  );
} else {
  console.log(
    `${month1.replace(month1[0], month1[0].toUpperCase())} has 30 days.`
  );
}

// 2. Write a program which tells the number of days in a month, now consider leap year.
let input4 = prompt("Enter a month:", "February");
const month2 = input4.toLocaleLowerCase();
if (
  month2 === "december" ||
  month2 === "january" ||
  month2 === "march" ||
  month2 === "may" ||
  month2 === "july" ||
  month2 === "august" ||
  month2 === "october"
) {
  console.log(
    `${month2.replace(month2[0], month2[0].toUpperCase())} has 31 days.`
  );
} else if (month2 === "february") {
  let leap = prompt("Is current year leap?", "Yes");
  const answer = leap.toLocaleLowerCase();
  answer === "yes"
    ? console.log(
        `${month2.replace(month2[0], month2[0].toUpperCase())} has 29 days.`
      )
    : console.log(
        `${month2.replace(month2[0], month2[0].toUpperCase())} has 28 days.`
      );
} else {
  console.log(
    `${month2.replace(month2[0], month2[0].toUpperCase())} has 30 days.`
  );
}
