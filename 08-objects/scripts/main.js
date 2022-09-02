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
// function userIdGenerator() {
//   let res = "",
//     chars = "abcdefghijklmnopqrstuvwxyz0123456789";

//   for (let i = 0; i < 6; i++) {
//     res += chars[Math.floor(Math.random() * chars.length)];
//   }

//   return res;
// }

let id = "ag42sp";

function signUp(id, name, email, password) {
  function setDateTime() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getUTCFullYear();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;

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
    return `${day}/${month}/${year} ${hours}:${mins} ${ampm}`;
  }

  function addNewUser() {
    users1.push({
      _id: id,
      username: name,
      email: email,
      password: password,
      createdAt: setDateTime(),
      isLoggedIn: false,
    });
  }

  function checkReg() {
    for (let i = 0; i < users1.length; i++) {
      if (users1[i]._id === id) {
        console.log("You are already an account.");
      } else {
        return false;
      }
    }
  }

  checkReg() === false && addNewUser(), console.log(`Welcome, ${name}!`);
}

signUp(id, "Dmitry", "dmitry@dmitry.com", "123444");

console.log(users1);

//     b. Create a function called signIn which allows user to sign in to the application
function signIn(username, password) {
  for (let i = 0; i < users1.length; i++) {
    if (
      (users1[i].email === username && users1[i].password === password) ||
      (users1[i].username === username && users1[i].password === password)
    ) {
      users1[i].isLoggedIn = true;
    } else if (
      (users1[i].email !== username && users1[i].password === password) ||
      (users1[i].username !== username && users1[i].password === password)
    ) {
      console.log("Wrong username");
    } else if (
      (users1[i].email === username && users1[i].password !== password) ||
      (users1[i].username === username && users1[i].password !== password)
    ) {
      console.log("Wrong password");
    } else {
      continue;
    }
  }
}

signIn("Dmitry", "123444");
console.log(users1);

// 3. The products array has three elements and each of them has six properties.
//     a. Create a function called rateProduct which rates the product
function rateProduct(product, userId, score) {
  product.ratings.push({ userId: userId, rate: score });
}

rateProduct(products[0], "ag42sp", 3);

console.log(products[0].ratings[2]);

//     b. Create a function called averageRating which calculate the average rating of a product
function averageRating(arr) {
  let avarageRatings = [],
    productRate = {},
    rate = 0,
    rateCount = 0;

  for (let i = 0; i < arr.length; i++) {
    productRate.name = arr[i].description;
    for (let j = 0; j < arr[i].ratings.length; j++) {
      rate += arr[i].ratings[j].rate;
      rateCount++;
    }
    rate > 0
      ? (productRate.avarageRate = +(rate / rateCount).toFixed(1))
      : (productRate.avarageRate = 0);
    avarageRatings.push(productRate);
    productRate = {};
    rate = 0;
    rateCount = 0;
  }

  return avarageRatings;
}

console.log(averageRating(products));

// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(product, userId) {
  product.likes.includes(userId)
    ? product.likes.splice(userId, 1)
    : product.likes.push(userId);
}

likeProduct(products[0], id);
console.log(products[0].likes);

likeProduct(products[0], id);
console.log(products[0].likes);
