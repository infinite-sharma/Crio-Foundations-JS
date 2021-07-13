function bouncer(arr) {
  let resultArray = [];
  for(index = 0 ; index < arr.length ; index++){
    if(arr[index]){
      resultArray.push(arr[index]);
    }
  }
  return resultArray;
};

console.log(bouncer([false, null, 0, NaN, undefined, ""]));

console.log()