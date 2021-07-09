let firstName = "Amit";
let lastName = "Sharma";
let fullName = firstName +" " +lastName;

console.log(fullName);

console.log("length of first name",firstName.length);
console.log("length of last name",lastName.length);
console.log("length of fullName",fullName.length);

let initials = fullName.charAt(0)+ " "+ fullName.charAt(5);
console.log(initials);

function generateInitials(firstname, lastname){
  return firstName.charAt(0)+lastname.charAt(0);
}

console.log(generateInitials(firstName,lastName));

function genIntialWithFullName(fullname){
  for(let i=0 ; i < fullname.length ; i++){
    if(fullname.charAt(i) === ' '){
      return fullname.charAt(0)+fullname.charAt(i+1);
    }
    
  }
}

fullName = "Mohit Sharma";
console.log(genIntialWithFullName(fullName))