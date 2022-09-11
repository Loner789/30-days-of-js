// ### Exercises:Level 1

// Practice
try {
  console.log(country);
} catch (err) {
  console.log(err);
} finally {
  console.log("Sorry, we can't find the country variable.");
}

// ### Exercises: Level 2

// Practice
try {
  let num = 12;
  console.log(num.toUpperCase());
} catch (err) {
  console.log(err);
} finally {
  console.log("Sorry, something goes wrong.");
}

// ### Exercises:Level

// Practice
const throwErrorExampleFun = () => {
  let message;
  let x = prompt("Enter a number: ");
  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    console.log(err);
  }
};

throwErrorExampleFun();
