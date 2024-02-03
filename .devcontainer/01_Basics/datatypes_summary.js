// primitive

// 7 types => String, Number, Boolean, Null, Undefined, Symbol, BigInt
const score = 100   //Number
const scoreValue = 100.3
// console.log(score);

let isString = "sinu"
// console.log(isString);

const isLoggedIn = false  //boolean
// console.log(isLoggedIn);

const outsideTemp = null  //null
// console.log(outsideTemp);

let userEmail; //undefined
// console.log(userEmail);

const id = Symbol('123')  //symbol
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n
// console.log(bigNumber);

console.table([score, isString, bigNumber, userEmail]);


// Reference (Non Primitive)

// Array, Objects, Functions
 const heros = ["shaktiman", "doga"];  
 let myObj = {
    name: "sinu",
    age: 25,
 }

const myFunction = function(){
    console.log("Hello World");
 }  
 

// console.log(typeof bigNumber);