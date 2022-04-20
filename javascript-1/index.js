// Classic object

// const person = {
//   name: 'Maxim',
//   age: 25,
//   greet: function () {
//     console.log('Greet!');
//   },
// };

// Object from class create

const person = new Object({
  name: 'Maxim',
  age: 25,
  greet: function () {
    console.log('Greet!');
  },
});

// Expand parent object class

Object.prototype.sayHello = function () {
  console.log('Hello!');
};
console.log(person.sayHello()); // Hello!

// Push object to prototype

const lena = Object.create(person);
console.log(lena.greet()); // Greet!
// Will look to prototype of prototype
console.log(lena.sayHello()); // Hello!

// All in JS is objects

// Classic string

// const str = 'I am string';

// String is object too

const str = new String('I am string');
console.log(str.sayHello()); // Hello!
