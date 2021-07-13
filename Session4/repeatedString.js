function repeatStringNumTimes(str, num) {
  if( num <= 0){
    return "";
  }else{
    let resultantString = "";
    while(num > 0){
      resultantString = resultantString + str;
      num--;
    }
    return resultantString;
  }
}

console.log(repeatStringNumTimes("abc", 1));