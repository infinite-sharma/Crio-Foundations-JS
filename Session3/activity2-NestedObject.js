const userDetails = {
    name: {
      first: "Amit Kumar",
      last: "Sharma",
    },
    jobTitle: "Software Engineer",
    email: {
      work: "amsharma@progress.com",
          personal: "amitksuoh@gmail.com",
    },
    status: {
      isOnline: true,
      isVerified: false,
    }
  }

console.log(userDetails);

const userDetails1 = Object.create(userDetails);

console.log(userDetails1.name);
console.log(userDetails1.status);

userDetails1.name.first = "Ved";
userDetails1.name.last = "Prakash";

console.log(userDetails1.name);
console.log(userDetails1.status);

//Add a property to objects
userDetails1.status["isPromMember"] = false;

console.log(userDetails1.status);

