let fruits = ["Apple", "Mango", "Kele"];
let mixed = [1, "apple", true, 3.14];

console.log(fruits[1]);

console.log(mixed[1]);

console.log(fruits.length);

fruits[1] = "Grapes";
console.log(fruits[1]);

fruits.unshift("Kiwi");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

console.log(fruits.includes("kiwi"));

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(num[1]);
console.log(num[9]);

num.shift();
console.log(num);

for (let i = 0; i <= num[i]; i++) {
  if (i === 5) {
    console.log("5 is present");
  }
}

console.log(num.length);
