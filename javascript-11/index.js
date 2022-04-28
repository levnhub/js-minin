const people = [
  { name: "Lev", age: 36, budget: 40000 },
  { name: "Elena", age: 25, budget: 30000 },
  { name: "Igor", age: 56, budget: 70000 },
  { name: "Victoriya", age: 12, budget: 10000 },
  { name: "Vasya", age: 4, budget: 1000 },
];

// Loops

// ES5

for (let index = 0; index < people.length; index++) {
  const element = people[index];
  console.log("for", element);
}

// ES6

for (const person of people) {
  console.log("for", person);
}

// ForEach

people.forEach(function (person, index, pArr) {
  console.log("forEach", person);
  console.log("forEach", index);
  console.log("forEach", pArr);
});
people.forEach((person) => console.log("forEach", person));

// Map

const newPeople = people.map((person) => `${person.name} (${person.age})`);
const newPeople2 = people.map((person) => person.age * 3);
console.log("newPeople", newPeople);
console.log("newPeople2", newPeople2);

// Filter

const adults = people.filter((person) => person.age >= 18);
console.log("adults", adults);

// Reduce

const amount = people.reduce((total, person) => total + person.budget, 0);
console.log("amount", amount);

// Find

const igor = people.find((person) => person.name === "Igor");
console.log("igor", igor);

// FindIndex

const igorIndex = people.findIndex((person) => person.name === "Igor");
console.log("igorIndex", igorIndex);

// All

const richPeopleBudgetAmount = people
  .filter((person) => person.budget > 3000)
  .map((person) => {
    return {
      info: `${person.name} (${person.age})`,
      budget: Math.sqrt(person.budget),
    };
  })
  .reduce((total, person) => total + person.budget, 0);

console.log("richPeopleBudgetAmount", richPeopleBudgetAmount);
