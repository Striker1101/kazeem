// external linking
console.log("external linking");

const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log("perc", percentage);

//primitive -> stores only one data

//number  (contains both integer and float)
//example -> 4, 100, 0.5,
const numOne = 4;
let numTwo = 100;
var numThree = 0.5;

//string (contains alpha-number -> and enclosed in single or double quote)
//example -> "boy", 'girl', "boys are 4, girls are 20"
const stringOne = "boy";
let stringTwo = "girl";
var stringThree = "boys are 4, girls are 20";
const stringFour = "234%*";

//boolean (contains two state, either true or false )
//example -> true , false
const booleanOne = true;
let booleanTwo = false;

//null (does not mean zero, just that the variable is empty)
const nullExample = null;

//undefined (this means that the variable is currently unknown/undefined)
const undefinedExample = undefined;

//non-primitive (composite)  -> stores multiple data

//object -> stores data in property and value (enclosing with curly brackets )
//to access an object you use .(dot)
const objectData = {
  //property : value
  numOne: 4,
  numTwo: 100,
  stringOne: "boy",
  stringTwo: "girl",
  nullExample: null,
  undefinedExample: undefined,
  booleanOne: true,
  booleanTwo: false,
  array: [1, 2, 34, 5, 533, 342],
};

console.log(objectData.stringTwo);

//array -> stores data in indexes (enclosed in a  block bracket )
//to access it, please use [index]

const arrayData = ["string", 34, null, false, true];

const arrayDataTwo = [
  "string",
  34,
  null,
  false,
  true,
  undefined,
  {
    dataOne: "ba ba ba",
    dataTwo: 342,
    dataThee: null,
    arrayData: [34, 4343, 323],
  },
  [0, 1, 2, 3, 4, 5],
];

console.log(arrayData[1]);
console.log(arrayDataTwo[6].dataOne);
