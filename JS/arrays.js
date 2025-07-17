const fruits = ["banana", "pear", "mango"];
// indexes           0       1        2

console.log("output", fruits[2]);

console.log(fruits.length);

fruits.forEach((fruit, index) => {
  console.log("fruit is : ", fruit);
});

fruits.push("apple");

console.log(fruits);
