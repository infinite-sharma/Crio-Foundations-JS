// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  console.log(lookup[val]);
  // Only change code above this line
  return result;
}

console.log(phoneticLookup("charlie"));