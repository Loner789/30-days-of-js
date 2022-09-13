// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.score = 0;
//     this.skills = [];
//   }
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
//   get getScore() {
//     return this.score;
//   }
//   get getSkills() {
//     return this.skills;
//   }
//   set setScore(score) {
//     this.score += score;
//   }
//   set setSkill(skill) {
//     this.skills.push(skill);
//   }
//   getPersonInfo() {
//     let fullName = this.getFullName();
//     let skills =
//       this.skills.length > 0 &&
//       this.skills.slice(0, this.skills.length - 1).join(", ") +
//         ` and ${this.skills[this.skills.length - 1]}`;

//     let formattedSkills = skills ? `He knows ${skills}` : "";

//     let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
//     console.log(this);
//     return info;
//   }
//   static favoriteSkill() {
//     const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
//     const index = Math.floor(Math.random() * skills.length);
//     console.log("hi");
//     return skills[index];
//   }
// }

// console.log(Person.favoriteSkill());

// class Student extends Person {
//   constructor(firstName, lastName, age, country, city, gender) {
//     super(firstName, lastName, age, country, city);
//     this.gender = gender;
//   }

//   saySomething() {
//     console.log("I am a child of the person class");
//   }
//   getPersonInfo() {
//     let fullName = this.getFullName();
//     let skills =
//       this.skills.length > 0 &&
//       this.skills.slice(0, this.skills.length - 1).join(", ") +
//         ` and ${this.skills[this.skills.length - 1]}`;

//     let formattedSkills = skills ? `He knows ${skills}` : "";
//     let pronoun = this.gender == "Male" ? "He" : "She";

//     let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`;
//     console.log(this);
//     return info;
//   }
// }

// const s1 = new Student(
//   "Asabeneh",
//   "Yetayeh",
//   250,
//   "Finland",
//   "Helsinki",
//   "Male"
// );
// const s2 = new Student("Lidiya", "Tekle", 28, "Finland", "Helsinki", "Female");
// s1.setScore = 1;
// s1.setSkill = "HTML";
// s1.setSkill = "CSS";
// s1.setSkill = "JavaScript";

// s2.setScore = 1;
// s2.setSkill = "Planning";
// s2.setSkill = "Managing";
// s2.setSkill = "Organizing";

// console.log(s1);
// console.log(s2);

// console.log(s1.saySomething());
// console.log(s1.getFullName());
// console.log(s1.getPersonInfo());

// console.log(s2.saySomething());
// console.log(s2.getFullName());
// console.log(s2.getPersonInfo());

// ### Exercises Level 1

// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
  constructor(name, age, color, legs = 4) {
    console.log(this);
    this._name = name;
    this._age = age;
    this._color = color;
    this._legs = legs;
  }
  get getLegsQuantity() {
    return this._legs;
  }

  getAge() {
    return this._age;
  }

  getInfo() {
    return `${this._name} is ${this._age} years old.`;
  }
}

const chappie = new Animal("Chappie", 3, "braun", 4);
console.log(chappie.getAge(), chappie.getLegsQuantity, chappie.getInfo());

// 2. Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color, legs);
    this._species = "dog";
  }

  getInfo() {
    return `${this._name} is a dog. It's ${this._age} years old.`;
  }
}

const sharik = new Dog("Sharik", 3, "braun");
// console.log(sharik);

class Cat extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color, legs);
    this._species = "cat";
  }

  getInfo() {
    return `${this._name} is a cat. It is ${
      this._age * 7
    } years old (for a cats age).`;
  }
}

const barsik = new Cat("Barsik", 7, "white");
// console.log(barsik);

// ### Exercises Level 2

// 1. Override the method you create in Animal class
console.log(sharik.getInfo());
console.log(barsik.getInfo());

// ### Exercises Level 3

// 1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

// // you output should look like this
// console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

class Statistics {
  constructor(array) {
    this._arr = array;
  }

  count() {
    return this._arr.length;
  }

  sum() {
    return this._arr.reduce((acc, cur) => acc + cur, 0);
  }

  min() {
    return Math.min(...this._arr);
  }

  max() {
    return Math.max(...this._arr);
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return Math.round(this.sum() / this.count());
  }

  median() {
    let sortArr = this._arr.sort((a, b) => a - b);
    return sortArr.length % 2 === 0
      ? (sortArr[sortArr.length / 2 - 1] + sortArr[sortArr.length / 2]) / 2
      : sortArr[Math.floor(sortArr.length / 2)];
  }

  mode() {
    let obj = {
        mode: this._arr[0],
        count: this._arr.filter((item) => item === this._arr[0]).length,
      },
      count = 0;

    for (let i = 0; i < this._arr.length; i++) {
      if (this._arr[i] !== obj.mode) {
        count = this._arr.filter((item) => item === this._arr[i]).length;
        if (count > obj.count) {
          obj.mode = this._arr[i];
          obj.count = count;
        }
      }
    }
    return obj;
  }

  variance() {
    return (
      this._arr
        .map((item) => (item - this.mean()) ** 2)
        .reduce((acc, cur) => acc + cur, 0) / this.count()
    ).toFixed(1);
  }

  std() {
    return Math.sqrt(this.variance()).toFixed(1);
  }

  freqDist() {
    let mode = 0,
      obj = {},
      newArr = [];
    for (let i = 0; i < this._arr.length; i++) {
      mode = this._arr[i];
      if (!newArr.some((item) => item.mode === mode)) {
        obj.mode = mode;
        obj.count = 1;
        newArr.push(obj);
        obj = {};
      } else {
        newArr.find((item) => item.mode === mode).count++;
      }
    }

    return newArr
      .sort((a, b) => b.count - a.count)
      .map(
        (item) =>
          `(${(item.count * (100 / this.count())).toFixed(1)}, ${item.mode})`
      );
  }

  describe() {
    return `Count: ${this.count()}
Sum: ${this.sum()}
Min: ${this.min()}
Max: ${this.max()}
Range: ${this.range()}
Mean: ${this.mean()}
Median: ${this.median()}
Mode: (${this.mode().mode}, ${this.mode().count})
Variance: ${this.variance()}
Standard Deviation: ${this.std()}
Frequency Distribution: ${this.freqDist()}`;
  }
}

const statistics = new Statistics(ages);
console.log(statistics.describe());

// 2. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
class PersonAccount {
  constructor(firstname, lastname, income, expenses) {
    this._firstName = firstname;
    this._lastName = lastname;
    this._income = income;
    this._expenses = expenses;
  }
  totalIncome() {
    let sum = this._income.reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    return sum;
  }
  totalExpense() {
    let sum = this._expenses.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    
    return sum;
  }
  accountInfo() {
    return `${this._firstName} ${this._lastName}`;
  }
  addIncome(item) {
    return this._income.push(+item);
  }
  addExpense(item) {
    return this._expenses.push(+item);
  }
  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
}

const personAccount = new PersonAccount(
  "Dmitry",
  "Malinovskiy",
  [3234, 4536, 6436, 6977, 56000],
  [5600, 3233, 1222, 3000]
);

console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountInfo());
personAccount.addIncome(1600);
personAccount.addExpense(12000);
console.log(personAccount.accountBalance());
