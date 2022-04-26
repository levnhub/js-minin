// Build simple object

// const animal = {
//   name: "Animal",
//   age: 5,
//   hasTail: true,
// };

// Build object from class

class Animal {
  static type = "ANIMAL"; // can access only from Anymal

  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.hasTail = options.hasTail;
  }

  // Add method to prototype (class)
  voice() {
    console.log("I am animal");
  }
}

const animal = new Animal({
  name: "Animal",
  age: 5,
  hasTail: true,
});

class Cat extends Animal {
  static type = "CAT";

  constructor(options) {
    // inherit properties
    super(options);
    // add properties
    this.color = options.color;
  }

  // overwrite parent method
  voice() {
    console.log("I am cat");
  }
  // getter
  get ageInfo() {
    return this.age * 7;
  }
  // setter
  set ageInfo(newAge) {
    this.age = newAge;
  }
}

const cat = new Cat({
  name: "Cat",
  age: 7,
  hasTail: true,
  color: "black",
});

// Practice example

class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  hide() {
    this.$el.style.display = "none";
  }

  show() {
    this.$el.style.display = "block";
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector);

    this.$el.style.width = this.$el.style.height = options.size + "px";
    this.$el.style.background = options.background;
  }
}

const box1 = new Box({
  selector: "#box1",
  size: 100,
  background: "red",
});

// box1.hide() // Hide box
// box1.show() // Show box

class Circle extends Box {
  constructor(options) {
    super(options);

    this.$el.style.borderRadius = "50%";
  }
}

const c = new Circle({
  selector: "#circle",
  size: 90,
  background: "green",
});
