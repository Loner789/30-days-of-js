// ### Exercises: Level 1

// 1. Create a closure which has one inner function
function first() {
  let a = 2;

  function second() {
    a++;
    return a;
  }
  return second;
}
const func = first();

console.log(func());
console.log(func());

// ### Exercises: Level 2

// 1. Create a closure which has three inner functions
// function firstFunc(){
//     let count = 3;

//     function secondFunc(){
//         count ++;
//         function thirdFunc(){
//             count += count;
//             function fourthFunc(){
//                 count *= count;
//                 return count;
//             }
//             return fourthFunc();
//         }
//         return thirdFunc();
//     }
// return secondFunc();
// }

// console.log(firstFunc());

function firstFunc() {
  let count = 3;

  function secondFunc() {
    count++;
    function thirdFunc() {
      count += count;
      function fourthFunc() {
        count *= count;

        return count;
      }
      return fourthFunc;
    }
    return thirdFunc;
  }
  return secondFunc;
}

// Wrong variants:
// const secondFunc = firstFunc(); // == firstFunc()
// const thirdFunc = secondFunc(); // == firstFunc()()
// const fourthFunc = thirdFunc(); // == firstFunc()()()

// console.log(fourthFunc()); // == (firstFunc(3)(4)(8))+(8*8) => 64
// console.log(fourthFunc()); // == (firstFunc()()() == 64)+(64*64) => 4096
// console.log(fourthFunc()); // == (firstFunc()()() == 4096)+(4096*4096) => 16 777 216

// const a = firstFunc()()();
// console.log(a()); // == firstFunc(count1 == 3)(count2 == 3+1)(count3 == (3+1)+(3+1))(count4 == (3+1)+(3+1)*(3+1)+(3+1)) == 64
// console.log(a()); // == (firstFunc()()() == count3 == 64)() == 64() == 64*64 => 4096
// console.log(a()); // 4096*4096 => 16 777 216

// Right variant
const b = firstFunc();
console.log(b()()()); // b = 64
console.log(b()()()); // b = 64()()() = 16900
console.log(b()()()); // b = 16900()()() = 1 142 575 204

// ### Exercises: Level 3

// 1. Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

// The task is not quite clear...
function personAccount({
  firstname = "",
  lastname = "",
  incDescr = "",
  income = 0,
  expDescr = "",
  expense = 0,
}) {
  function totalIncome() {
    const incomes = [];

    function addIncome() {
      incomes.push({ description: incDescr, income: income });

      return incomes;
    }
    addIncome();
    let sum = incomes.reduce((acc, cur) => {
      return acc + cur.income;
    }, 0);

    return sum;
  }

  function totalExpense() {
    const expenses = [];

    function addExpense() {
      expenses.push({ description: expDescr, expense: expense });

      return expenses;
    }
    addExpense();
    let sum = expenses.reduce((acc, cur) => {
      return acc + cur.expense;
    }, 0);

    return sum;
  }

  function accountInfo() {
    const firstName = firstname;
    const lastName = lastname;

    return `${firstName} ${lastName}`;
  }

  function accountBalance() {
    return totalIncome() - totalExpense();
  }

  return `Person: ${accountInfo()}\nAccount balance: ${accountBalance()}\nTotal incomes: ${totalIncome()}\nTotal expenses: ${totalExpense()}\n`;
}

const person = {
  firstname: "Dmitry",
  lastname: "Malinovskiy",
  incDescr: "salary",
  income: 17000,
  expDescr: "rent",
  expense: 5000,
};

const somebody = personAccount(person);

console.log(somebody);
