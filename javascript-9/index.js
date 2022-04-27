// Wrapper for default properties

const withDefaultValue = (target, defaultValue = 0) => {
  return new Proxy(target, {
    get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue),
  });
};

const position = withDefaultValue(
  {
    x: 24,
    y: 42,
  },
  0
);

// console.log(position); // Proxy {x: 24, y: 42}
// console.log(position.y); // 0

// Hidden properties (security add)

const withHiddenProps = (target, prefix = "_") => {
  return new Proxy(target, {
    has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
    // Reflect class methods for intercapte JS operations
    ownKeys: (obj) => Reflect.ownKeys(obj).filter((p) => !p.startsWith(prefix)),
    // receiver === Proxy, void 0 === undefined
    get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0),
  });
};

const data = withHiddenProps({
  name: "Lev N",
  age: 36,
  _uid: "123123", // hidden field
});

// Output

// data
// Proxy {name: 'Lev N', age: 36, _uid: '123123'}

// data.age
// 36

// data.name
// 'Lev N'

// data._uid
// undefined

// '_uid' in data
// false

// for (let key in data) console.log(key)
// name
// age
// undefined

// Object.keys(data)
// (2) ['name', 'age']

// Optimization

const userData = [
  { id: 1, name: "Lev", job: "Front-end", age: 36 },
  { id: 2, name: "Elena", job: "Back-end", age: 33 },
  { id: 3, name: "Viktor", job: "Fullstack", age: 31 },
  { id: 4, name: "Vasilisa", job: "Manager", age: 34 },
];

// userData.find(user => user.id === 4) // low speed

const index = {};
userData.forEach((item) => (index[item.id] = item));

// index[2] // high speed

// Use proxy for this
// rewrite array push method
// add custom method for find item by index

const IndexedArray = new Proxy(Array, {
  construct(target, [args]) {
    const index = {};
    args.forEach((item) => (index[item.id] = item));
    return new Proxy(new target(...args), {
      get(arr, prop) {
        switch (prop) {
          // rewrite push method
          case "push":
            return (item) => {
              index[item.id] = item;
              arr[prop].call(arr, item);
            };
          case "findById":
            return (id) => index[id];
          default:
            return arr[prop];
        }
      },
    });
  },
});

const users = new IndexedArray(userData);

// output

// users.push({id: 5, name: 'Sergey'})
// undefined

// users
// Proxy {0: {…}, 1: {…}, 2: {…}, 3: {…}, 4: {…}}

// users[4]
// {id: 5, name: 'Sergey'}

// users.findById(5)
// {id: 5, name: 'Sergey'}
