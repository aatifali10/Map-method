const number = [2, 4, 6, 8, 10];

// Squaroot
const sqrts = number.map(Math.sqrt);
console.log(sqrts);

// Multiple number
const mult = number.map((num) => {
  return num * 2;
});

console.log(mult);

//
const ages = [16, 18, 20];
const names = ["John", "Jane", "Mark"];

const students = ages.map((age, index) => {
  const name = names[index];
  return {
    name,
    age,
  };
});

console.log(students);

const people = [
  {
    first: "Aatif",
    last: "Ali",
    age: 25,
  },
  {
    first: "Daniyal",
    last: "Manzoor",
    age: 25,
  },
  {
    first: "Aqib",
    last: "Ali",
    age: 25,
  },
];

const conct = people.map((person) => {
  return person.first + " " + person.last + " " + person.age;
});
console.log(conct);

const data = Object.values(people);
// console.log(data);

const percent = data.filter((value) => {
  const name = people[value];
  console.log(value);
  return people.first / 10;
});
// console.log(percent);
