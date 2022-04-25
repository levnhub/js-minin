// "for in" interable object

// const person = {
//   name: "Lev N",
//   birthYear: 1986,
// };

// Extend objec with "property descriptors"

const person = Object.create(
  {
    // Prototype is here
    calculateAge() {
      console.log("Age:", new Date().getFullYear() - this.birthYear);
    },
  },
  {
    name: {
      // pale color in console
      value: "Lev N",
      enumerable: true, // you can get property in loop
      writable: true, // you can write property?
      configurable: true, // you can delete property?
    },
    birthYear: {
      // pale color in console
      value: 1986,
      // writable: false, // default
      // enumerable: false, // default
      // configurable: false, // default
    },
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear; // 36
      },
      set(value) {
        document.body.style.background = "red"; // when set new value, background will be red
        console.log("Set age", value);
      },
    },
  }
);

// person.name = "Maxim"; // ok

for (const key in person) {
  if (person.hasOwnProperty(key)) {
    // exclude prototype from iteration
    console.log("Key:", key, person[key]);
  }
}

console.log(person);
