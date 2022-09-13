// ### Exercises: Level 1

// 1. Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem("firstName", "Dmitry");
localStorage.setItem("lastName", "Malinovskiy");
localStorage.setItem("age", 31);
localStorage.setItem("country", "Russia");
localStorage.setItem("city", "Moscow");

console.log(localStorage);

localStorage.clear();

// ### Exercises: Level 2

// 1. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
const student = {
  firstName: "Dmitry",
  lastName: "Malinovskiy",
  age: 31,
  skills: ["HTML", "CSS", "JS", "React"],
  country: "Russia",
};
const studentJSON = JSON.stringify(student);

localStorage.setItem("student", studentJSON);

console.log(localStorage);

localStorage.clear();

// ### Exercises: Level 3

// 1. Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
const personAccount = {
  firstName: "Dmitry",
  lastName: "Malinovskiy",
  incomes: [
    { description: "salary", income: 10000 },
    { description: "partTimeJob", income: 20000 },
    { description: "bonus", income: 5000 },
  ],
  expenses: [
    { description: "rent", expence: 10000 },
    { description: "food", expence: 5000 },
    { description: "newBike", expence: 10000 },
  ],
  totalIncome: function () {
    let sum = this.incomes.reduce((acc, cur) => {
      return acc + cur.income;
    }, 0);

    return sum;
  },
  totalExpense: function () {
    let sum = this.expenses.reduce((acc, cur) => {
      return acc + cur.expence;
    }, 0);

    return sum;
  },
  accountInfo: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  addIncome: function (description, income) {
    this.incomes.push({ description: description, income: income });
    const personAccJSON = JSON.stringify(personAccount);

    localStorage.setItem("personAcc", personAccJSON);
  },
  addExpense: function (description, expence) {
    this.expenses.push({ description: description, expence: expence });
    const personAccJSON = JSON.stringify(personAccount);

    localStorage.setItem("personAcc", personAccJSON);
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};

console.log(localStorage);

personAccount.addIncome("pension", 13000);

console.log(localStorage);
console.log(JSON.parse(localStorage.getItem("personAcc")).incomes);
