function titleCase(str) {
  let strArray = str.split(" ");
  for(let index = 0 ; index < strArray.length ; index++){
    strArray[index] = strArray[index].charAt(0).toUpperCase() + strArray[index].slice(1,strArray[index].length).toLowerCase();
    console.log(strArray[index]);
  }
  return strArray.join(" ");
}

console.log(titleCase("I'm a liTtTle tea pot"));