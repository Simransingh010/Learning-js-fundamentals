let person = {
  name: "Simran",
  age: 23,
  city: "New York",
  isStudent: true,
};

console.log(person.name);
console.log(person.age);

person.age = 41;

console.log(person.age);

delete person.isStudent;
console.log(person.isStudent);

console.log("name" in person);

person.job = "Engineer";

console.log(person.job);

for (key in person) {
  console.log(key, person[key]);
}

let car = {
  name: "Toyota",
  model: 2020,
  engine: "bs6",
  fuel: "petrol",
  steering: "right",
};

console.log(" ");

for (key in car) {
  console.log(key, car[key]);

  this.person();
}
