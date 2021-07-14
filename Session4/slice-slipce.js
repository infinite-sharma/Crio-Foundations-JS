function frankenSplice(arr1, arr2, n) {
  let resultantArray = arr2.slice(0,arr2.length);
  //resultantArray.splice(n,0,arr1);

  for(let i = 0; i < arr1.length ; i++){
    resultantArray.splice(n+i,0,arr1[i]);
  }
  return resultantArray;
  
}

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));