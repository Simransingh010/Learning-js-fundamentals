function greetings() {
  console.log("hello");
}

greetings();

function greetPerson(name) {
  console.log("Hello " + name + "!");
}

greetPerson("Arjana");

function add(a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
}

add(3, 4);
add(129, 333);

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log(fullName("Babbu", "Maan"));

function multiply(a, b) {
  return a * b;
}

console.log(multiply(31, 5));

function isEven(a) {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(2));

function getDiscount(a, b) {
  return a - (b / 100) * a;
}

console.log("The Discounted price is: " + getDiscount(100, 4));
