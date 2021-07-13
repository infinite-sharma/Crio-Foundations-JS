// Create : object person
const person = {
  "name" : "Amit kumar sharma",
  "jobTitle" : "Software Engineer",
  "email" : "amitksharma1190@gmail.com",
  "isVerified": false
}

console.log("PersonName =" +person.name+" "+"IsVerified = "+person.isVerified);
person.isVerified = true;

console.log(person);

//Read : using [] notation for reading object content

console.log(person.name + " has job title - " + person["jobTitle"]);

// Delete : Deleting object property in Js

delete person.email;
console.log(person);

//Update: updating object by adding a new property
person.emailAddress = "amitksuoh@gmail.com";

console.log("Person object after update: ",person);
//below example will show object as [object object]
//console.log("Person object after update: "+ person);