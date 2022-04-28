const obj = {
  name: "Lev N",
  age: 36,
  job: "Front-end",
};

const entries = [
  ["name", "Lev N"],
  ["age", 26],
  ["job", "Front-end"],
];

console.log(Object.entries(obj)); // Make like "entries"
console.log(Object.fromEntries(entries)); // Make like "obj"

const map = new Map(entries);

console.log(map); // Map(3) {'name' => 'Lev N', 'age' => 26, 'job' => 'Front-end'}
console.log(obj.job); // Front-end
console.log(map.get("job")); // Front-end

map.set("newField", 42).set(obj, "Value of object");

console.log(map);
