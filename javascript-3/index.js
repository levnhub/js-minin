function createCalcFunction(n) {
  return function () {
    console.log(1000 * n);
  };
}

const calc = createCalcFunction(42);
calc(); // 42000

function createIncrementor(n) {
  return function (num) {
    return n + num;
  };
}

const addOne = createIncrementor(1);
const addTen = createIncrementor(10);

console.log(addOne(10)); // 11
console.log(addOne(41)); // 42

console.log(addTen(10)); // 20
console.log(addTen(41)); // 51

function urlGenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`;
  };
}

const comUrl = urlGenerator('com');
const ruUrl = urlGenerator('ru');

console.log(comUrl('google')); // https://google.com
console.log(comUrl('netflix')); // https://netflix.com

console.log(ruUrl('google')); // https://google.ru
console.log(ruUrl('netflix')); // https://netflix.ru

// Test case

// Write your own bind function

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {
  name: 'Michael',
  age: 22,
  job: 'Frontend',
};

const person2 = {
  name: 'Elena',
  age: 19,
  job: 'SMM',
};

// My function

// function bind(person, logPerson) {
//   person.logPerson = logPerson;
//   person.logPerson();
//   // Person: Michael, 22, Frontend
//   // Person: Elena, 19, SMM
// }

// bind(person1, logPerson);
// bind(person2, logPerson);

// person1.logPerson(); // Person: Michael, 22, Frontend
// person2.logPerson(); // Person: Elena, 19, SMM

// Teacher function

function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args);
  };
}

bind(person1, logPerson)();
bind(person2, logPerson)();
