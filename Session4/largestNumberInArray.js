function largestOfFour(arr) {
  let arrayWithLargetElementFromEachArray = [];

  for(let level1 = 0 ; level1 < arr.length ; level1++){
    let largestElementInSubarray;
    for(let level2 = 0 ; level2 < arr[level1].length ; level2++){
        if(level2 == 0){
          largestElementInSubarray = arr[level1][level2];
          continue;
        }
        if(arr[level1][level2] > largestElementInSubarray){
          largestElementInSubarray = arr[level1][level2];
        }
    }
    arrayWithLargetElementFromEachArray.push(largestElementInSubarray);
  }

  return arrayWithLargetElementFromEachArray;
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -300, -17, -10]]));