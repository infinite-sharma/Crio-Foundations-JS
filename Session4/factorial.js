// function factorialize(num) {
//   if(num === 1){
//     return 1;
//   }else{
//     return num * factorialize(num-1); 
//   }
// }

// console.log(factorialize(5));

function factorialize(num) {
  let factorial = 1;
  while(num > 0){
    factorial = num * factorial;
    num--;
  }
  return factorial;
}

console.log(factorialize(5));