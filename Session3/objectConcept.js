//const obj1 = {"food": "pizza"};
//const obj2 = {"Car" : "Maruti"};
//console.log(Object.assign(obj1, obj2));


//JavaScript Objects

let ved = {
  "name": "Ved sharma",
  "age": 8,
  "village": "Ashta Village", 
  "getAge": function(){
		return this.age;
		},
  "isNinja": false
}

console.log(ved);
console.log(ved.getAge());
//console.log(ved.getAge);

// Ways to create Objects
// empty {}
const car = {};
car.color = "Blue";
car.brand = "Mercedez";
car.seats = 5;
car.isPetrol = true; 
console.log("car - ", car);

// Object literal **
const car1 = {
  "color": "Blue",
  "brand" : "Toyoto",
  "seats" : 5,
  "isPetrol" : "Diesel"
};
console.log(`car1 - `,car1);

// Using new keyword
const car3 = new Object();
car3.color = "Blue";
car3.brand = "Mercedez";
car3.seats = 5;
car3.isPetrol = true; 
console.log("car3", car3);

// Using Destructuring	- Assigning one object to another 
const car4 = {...car1};
console.log("car4", car4);

// Using Object.create()	 
const car5 = Object.create(car4);
console.log(`car5 brand value : - ${JSON.stringify(car5.brand)}`);

// Using JSON.parse()   
const obj6 = JSON.parse("{\"food\":\"Pizza\",\"car\":\"Maruti\"}");
console.log("obj6", obj6);

// json string to js objects - JSON.parse 
// js objects to json string - JSON.stringify 

// copy objects
const obj1 = {"food": "Pizza"};
const obj2 = {"car": "Maruti"};

//below expression will assign value of both objects obj1 and obj2 value to obj3
const obj3 = Object.assign(obj1, obj2);
console.log("obj3 after assigning value to it : ",obj3);
//const obj4 = Object.

// Delete props from an object 
delete obj3.food;
console.log("obj3 value after deleting food property", obj3);

// Nested Object

let ourStorage = {
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
  }
};

console.log("Reading property value from nested object :- ",ourStorage.cabinet["top drawer"].folder2);


// Arrays in JavaScript

let simpleArray = ['one', 2, true, undefined, null];
console.log(simpleArray);
//0: "one"
//1: 2
//2: false
//3: undefined
//4: null
//length: 5
console.log("Type of Array : ",typeof simpleArray)
typeof simpleArray; // "object"

// access
simpleArray[0]; // "one"

// update
simpleArray[2] = false;

// create
const arr = [];
arr[2] = "CrioDo";

console.log("content of arr Array :",arr);

const arr1 = new Array(5);
console.log("content of arr1 Array :",arr1);
// typeof data types
typeof null
console.log("typeof null :",typeof null);
////"object"
typeof 5
console.log("typeof 5 : ",typeof 5);
//"number"
typeof false
console.log("typeof false : ",typeof false);
//"boolean"
typeof "Amit"
console.log("typeof \"Amit\"",typeof "Amit");
//"string"
typeof arr[0]
console.log("typeof arr[0] : ",typeof arr[0], " and typeof arr[2] :",typeof arr[2]);
//"undefined"
typeof Object
console.log("typeof Object : ",typeof Object)
//"function"


console.log("car object :", car);

// Object.keys/values/entries
Object.keys(car);
console.log("Object.keys(car) :",Object.keys(car))

Object.values(car);
console.log("Object.values(car) :",Object.values(car))

Object.entries(car);
console.log("Object.entries(car) :",Object.entries(car))

console.log("Simple Array Content :",simpleArray);

console.log("Object.keys : ",Object.keys(simpleArray));
console.log("Object.values : ",Object.values(simpleArray));
console.log("Object.entries : ",Object.entries(simpleArray));


// Array methods
const fruits = ["Apple", "Mango","Litchi", "Kiwi", "Grapes", "Oranges"];

console.log("fruits array : ",fruits);
console.log(fruits.length);
// last index
console.log(fruits.length-1);

// push & pop - adding and removing from end index
console.log(fruits.push("DragonFruit"));
console.log("fruits array after push : ",fruits);
console.log(fruits.pop());
console.log("fruits array after pop : ",fruits);

// unshift & shift - adding and removing from start index

console.log(fruits.unshift("DragonFruit"));
console.log("fruits array after unshift : ",fruits);
console.log(fruits.shift());
console.log("fruits array after shift : ",fruits);

// slice & splice

//array.slice(starting from index, until);until not included
// Slice don't change the array even create a new array with element specified and return it.
console.log("fruits.slice(2,4) : ",fruits.slice(2,4));
console.log(fruits.splice(2,4));

//splice will change the array; We can add/remove elements. for removing { Array.splice(starting index, how many after this ), return new array of deleted elements)
console.log(fruits.splice(1,0,"Watermelon", "pineapple"));

// sort & reverse & concat

console.log(fruits.sort());

console.log(fruits.reverse());

const pet = ["tommy", "pluto", "simba"];

console.log(pet.concat(fruits));

const array = [4,7,8,0,6];
const obj = {"name":"crio.do"};

console.log(Array.isArray(obj));
console.log(Array.isArray(array));

console.log(Object.prototype.constructor === obj.constructor);
console.log(Array.prototype.constructor === array.constructor);