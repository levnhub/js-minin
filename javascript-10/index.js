// Native generator (add steps to your methods)

function* strGenerator() {
  yield "H";
  yield "e";
  yield "l";
  yield "l";
  yield "o";
}

const str = strGenerator();

// str.next() // {value: 'H', done: false}
// str.next() // {value: 'e', done: false}
// ...
// str.next()
// {value: undefined, done: true} // after last 'yield'

function* numberGen(n = 10) {
  for (let index = 0; index < n; index++) {
    yield index;
  }
}

const num = numberGen(7);

// num.next()
// {value: 0, done: false}
// num.next()
// {value: 1, done: false}
// ...
// num.next()
// {value: 6, done: false}
// num.next()
// {value: undefined, done: true}

// Custom generators (iterator)

const iterator = {
  gen(n = 10) {
    let i = 0;
    return {
      next() {
        if (i < n) {
          return { value: ++i, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

const itr = iterator.gen();

// itr.next()
// {value: 1, done: false}
// ...
// itr.next()
// {value: undefined, done: true}

// For of loop (work if object had Symbol in prototype)

for (const k of "Hello") {
  console.log(k); // H, e, l, l, o
}

for (const k of [1, 1, 2, 3, 5, 8, 13]) {
  console.log(k); // 1, 1, 2, 3, 5, 8, 13
}

const iteratorWithSymbol = {
  [Symbol.iterator](n = 10) {
    let i = 0;
    return {
      next() {
        if (i < n) {
          return { value: ++i, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (const k of iteratorWithSymbol) {
  console.log(k); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

// Check Symbol in Generator

function* iter(n = 10) {
  for (let index = 0; index < n; index++) {
    yield index;
  }
}

for (const k of iter(6)) {
  console.log(k); // 0, 1, 2, 3, 4, 5
}
