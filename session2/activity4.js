let val='3';
function getGreekString(val){
  let answer = "";
  //let val = "2";

  switch (val){
    case '1':
    case 'A':
    case 'a':
      answer = "Alpha"
      break;
    case '2':
    case 'b':
    case 'B':
      answer = "Beta"
      break;
    case '3':
    case 'c':
    case "C":
      answer = "Gamma";
      break;
    case '4':
    case 'd':
    case 'D':
      answer = "Delta";
      break;
    default:
      console.log("Invalid choice");
  }
  return answer;
}


let ans = getGreekString(val);
console.log(ans);