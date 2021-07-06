//Date July 6th, First class


console.log("Hello world");

console.log(5*5/5);
console.log(5 * 15);
console.log("Hello" + " world");
console.log(5 + 10 * 5);
console.log((5+10)*5);

console.log((5+10)%5);

var name="amit";
console.log(name);

let pet = "Narwhal";
pet = "The Krakan";
console.log(pet);

var surname= "sharma";
let petAnimal = "cat";
const isVal = true;

console.log(surname);
console.log(pet);
console.log(isVal);

var surname = "Agnihotri";
// let petAnimal = "dog"; it will give error "petAnimal has already been defined"

//isVal= false; it will give TypeError : Assignment to constant variable
surname = ""


console.log("the output of 2===2: "+ (2 === 2));

let a = 10;
let b = 20;

console.log( a > b);
console.log( a === b);
console.log( a <= b );
console.log( a != b);

function calculateGrade( marks){
  let grade = "";
  if(marks <= 40){
    grade = "Fail";
  }else if(marks > 40 && marks <=60){
    grade = "C" ;
  }else if(marks > 60 && marks <= 80){
    grade = "B" ;
  }else if(marks > 80 && marks <= 100){
    grade = "A";
  }else{
    grade = "Invalid marks given";
  }
  return grade;
}

console.log(calculateGrade(40));
console.log(calculateGrade(55));
console.log(calculateGrade(65));
console.log(calculateGrade(81));
console.log(calculateGrade(101));
console.log(calculateGrade(10));