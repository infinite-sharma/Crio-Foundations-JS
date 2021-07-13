function translatePigLatin(str) {
  let endIndex;
  let arrStr = str.split("");
  for(endIndex = 0 ; endIndex < arrStr.length ; endIndex++){
    if(arrStr[endIndex] === 'a' || arrStr[endIndex] === 'e' || arrStr[endIndex] === 'i' || arrStr[endIndex] === 'o' || arrStr[endIndex] === 'u' ){
        if(endIndex === 0){
          return arrStr.join("")+"way";
        }else{
          console.log("endIndex just before break = ",endIndex);
          break;
          console.log("endIndex after break = ",endIndex);
        }
    }
  }
  console.log("endIndex after for loop = ", endIndex);
  let newStr = arrStr.splice(0,endIndex);
  return arrStr.join("") + newStr.join("") + "ay";
}


console.log(translatePigLatin("cconsonant"));