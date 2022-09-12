const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];

let age = 250;

let isMarried = true;

const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;

// ### Exercises Level 1

// 1. Change skills array to JSON using JSON.stringify()
const skills1 = JSON.stringify(skills);

console.log(skills1);

// 2. Stringify the age variable
const age1 = JSON.stringify(age);

console.log(age1);

// 3. Stringify the isMarried variable
const isMarried1 = JSON.stringify(isMarried);

console.log(isMarried1);

// 4. Stringify the student object
const student1 = JSON.stringify(student);

console.log(student1);

// ### Exercises Level 2

// 1. Stringify the students object with only firstName, lastName and skills properties
const student2 = JSON.stringify(student, ["firstName", "lastName", "skills"]);

console.log(student2);

// ### Exercises Level 3

// 1. Parse the *txt* JSON to object.
const txt1 = JSON.parse(txt);

console.log(txt1);

// 2. Find the user who has many skills from the variable stored in *txt*.

const findMaxSkillsMan = (json) => {
  const object = JSON.parse(json);
  const names = Object.keys(object);
  let count = 0,
    maxSkillsMan = "";

  for (const person of names) {
    if (object[person].skills.length > count) {
      count = object[person].skills.length;
      maxSkillsMan = person;
    }
  }
  return {person: maxSkillsMan, skillsCount: count};
};

console.log(findMaxSkillsMan(txt));
