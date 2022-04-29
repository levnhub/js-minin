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

// Map Class

const map = new Map(entries);

console.log(map); // Map(3) {'name' => 'Lev N', 'age' => 26, 'job' => 'Front-end'}
console.log(obj.job); // Front-end
console.log(map.get("job")); // Front-end

map.set("newField", 42).set(obj, "Value of object").set(NaN, "NaN ??");

console.log(map.get(obj)); // obj can be the key!
console.log(map.get(NaN)); // NaN can be the key!

map.delete("job");
console.log(map.has("job")); // false
console.log(map.size); // 5
map.clear();
console.log(map.size); //

// For of Map

for (const entry of map.entries()) {
  console.log(entry);
}
