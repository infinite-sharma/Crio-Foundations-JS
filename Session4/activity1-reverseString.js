function reverseString(str){
  let reverseStr = "";
  let strArray = str.split("");
  reverseStr = strArray.reverse().join("");
  return reverseStr;
}


console.log(reverseString("Amit"));

