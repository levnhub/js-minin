const person = {
  name: "Lev N",
  age: 36,
  job: "Front-end",
};

// Proxy for objects

const op = new Proxy(person, {
  get(target, prop) {
    // console.log("Target", target);
    console.log("Getting prop", prop);
    // if has not prop, get string from values (custom logics)
    if (!(prop in target)) {
      return prop
        .split("_")
        .map((p) => target[p])
        .join(" ");
    }
    // just get prop
    return target[prop];
  },
  set(target, prop, value) {
    // set custom object error handle
    if (prop in target) {
      target[prop] = value;
    } else {
      throw new Error(`No ${prop} field in target`);
    }
  },
  has(target, prop) {
    return ["age", "name", "job"].includes(prop); // 'name' in op === false
  },
  deleteProperty(target, prop) {
    console.log("Deleting...", prop);
    delete target[prop];
    return true;
  },
});

// Proxy for functions

const log = (text) => `Log: ${text}`;

const fp = new Proxy(log, {
  // Catch function execution
  apply(target, thisArg, args) {
    console.log("Calling fn...");
    return target.apply(thisArg, args).toUpperCase(); // Call function with right context
  },
});

// Proxy for classes

class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
}

const PersonProxy = new Proxy(Person, {
  // catch new Class extending
  construct(target, args) {
    console.log("Construct...");

    // return new target(...args); // Simple example

    // Hard example: second proxy ))
    return new Proxy(new target(...args), {
      get(t, prop) {
        console.log(`Getting prop "${prop}"`);
        return t[prop];
      },
    });
  },
});

const p = new PersonProxy("Maxim", 30);
