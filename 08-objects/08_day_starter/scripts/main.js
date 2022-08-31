// Exercises: Level 1

// 1. Create an empty object called dog
const dog = {};

// 2. Print the the dog object on the console
console.log(dog);

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return _woof woof_
dog.name = "Chappie";
dog.legs = 4;
dog.color = "black";
dog.age = 5;
dog.bark = function () {
  return "woof woof";
};

// 4. Get name, legs, color, age and bark value from the dog object
console.log(dog.name, dog["legs"], dog.color, dog["age"], dog.bark());

// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = "Dingo";
dog.getDogInfo = function () {
  return `This dog's name is ${this.name}. He is ${this.age} years old.`;
};

console.log(dog.getDogInfo());

// Exercises: Level 2

// 1. Find the person who has many skills in the users object.
const keys = Object.keys(users);
// let skillsArr = [];
// keys.forEach(key => skillsArr.push(users[key].skills.length));
// const maxSkills = Math.max(...skillsArr);
// keys.forEach(key => users[key].skills.length === maxSkills && console.log(key));

let maxSkills = 0;
keys.forEach((key) => {
  if (users[key].skills.length > maxSkills) {
    maxSkills = users[key].skills.length;
  }
});
keys.forEach(
  (key) => users[key].skills.length === maxSkills && console.log(key)
);

// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
let pointsCount = 0,
  loggedInCount = 0;

keys.forEach((key) => {
  if (users[key].isLoggedIn) {
    loggedInCount++;
  }
});

keys.forEach((key) => {
  if (users[key].points >= 50) {
    pointsCount++;
  }
});

console.log(loggedInCount);
console.log(pointsCount);

// 3. Find people who are MERN stack developer from the users object
keys.forEach((key) => {
  if (users[key].skills.includes("MongoDB", "Express", "React", "Node")) {
    console.log(key);
  }
});

// 4. Set your name in the users object without modifying the original users object
const newUsers = Object.assign({}, users);
newUsers.Dmitry = {
  email: "dmitry@dmitry.com",
  skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  age: 31,
  isLoggedIn: false,
  points: 100,
};

console.log(newUsers);

// 5. Get all keys or properties of users object
const usersKeys = Object.keys(users);

console.log(usersKeys);

// 6. Get all the values of users object
const usersValues = Object.values(users);

console.log(usersValues);

// 7. Use the countries object to print a country name, capital, populations and languages.
for (let i = 0; i < countries.length; i++) {
  console.log(
    countries[i].name,
    countries[i].capital,
    countries[i].population,
    countries[i].languages
  );
}

// Exercises: Level 3

// 1. Create an object literal called _personAccount_. It has _firstName, lastName, incomes, expenses_ properties and it has _totalIncome, totalExpense, accountInfo,addIncome, addExpense_ and _accountBalance_ methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
let personAccount = {
  firstName: "Dmitry",
  lastName: "Malinovskiy",
  incomes: [10000, 20000, 5000, 15000, 50000],
  expenses: [20000, 10000, 5000, 10000],
  totalIncome: function () {
    let res = 0;

    for (let i = 0; i < this.incomes.length; i++) {
      res += this.incomes[i];
    }

    return res;
  },
  totalExpense: function () {
    let res = 0;

    for (let i = 0; i < this.expenses.length; i++) {
      res += this.expenses[i];
    }

    return res;
  },
  accountInfo: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  addIncome: function (...args) {
    this.incomes.push(...args);
  },
  addExpense: function (...args) {
    this.expenses.push(...args);
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};

console.log(personAccount);

// 2. **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
//   Imagine you are getting the above users collection from a MongoDB database.
//     a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
//     b. Create a function called signIn which allows user to sign in to the application

// 3. The products array has three elements and each of them has six properties.
//     a. Create a function called rateProduct which rates the product
//     b. Create a function called averageRating which calculate the average rating of a product

// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
// let keys = Object.keys(users),
//   skillsArr = [];

// console.table(users);
// let usersArr = Object.entries(users);
// for (let i = 0; i < usersArr.length; i++) {
//   for (let j = 0; j < usersArr[i].length; j++) {
//     if (typeof usersArr[i][j] === "object") {
//       skillsArr.push(usersArr[i][j].skills.length);
//       let maxSkills = Math.max(...skillsArr);

//       if (usersArr[i][j].skills.length === maxSkills) {
//         console.log(usersArr[i][0]);
//       }
//     }
//   }
// }
// console.log(a[0][1].skills.length)