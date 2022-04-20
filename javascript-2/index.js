// this === window // true

function hello() {
  console.log('Hello', this); // Window
}

window.hello(); // Window

const person = {
  name: 'Lev',
  age: 25,
  sayHello: hello, // person {...} context
  sayHelloWindow: hello.bind(window), // window context
  sayHelloWindow2: hello.bind(this), // window context
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`);
    console.log(`Name is ${this.name}, age is ${this.age}`); // Name is Lev, age is 25
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  },
};

// push another context to person method

const lena = {
  name: 'Elena',
  age: 23,
};

// just bind first way

// const fnLenaInfoLog = person.logInfo.bind(lena);
// fnLenaInfoLog('Front-end', '9-999-666-66-66');
// Name is Elena, age is 23
// Job is Front-end
// Phone is 9-999-666-66-66

// just bind second way
const fnLenaInfoLog = person.logInfo.bind(lena, 'Front-end', '9-999-666-66-66');
fnLenaInfoLog();
// Name is Elena, age is 23
// Job is Front-end
// Phone is 9-999-666-66-66

// call & apply

person.logInfo.call(lena, 'Front-end', '9-999-666-66-66');
person.logInfo.apply(lena, ['Front-end', '9-999-666-66-66']); // need array here

//// ======================

//// Add usefull method to prototype (all Arrays, for example)

const array = [1, 2, 3, 4, 5];

// Map method not in prototype

function multBy(arr, n) {
  return arr.map(function (i) {
    return i * n;
  });
}
console.log(multBy(array, 5)); // [5, 10, 15, 20, 25]

// Good practice

Array.prototype.multBy = function (n) {
  // console.log('multBy', this); // [1, 2, 3, 4, 5]
  return this.map(function (i) {
    return i * n;
  });
};

console.log(array.multBy(2)); // [2, 4, 6, 8, 10]
