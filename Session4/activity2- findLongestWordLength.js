 function findLongestWordLength(str){
   let arrayStr = str.split(" ");
   let longestLengthSubstring = 0;
   let longestSubstring = "";
   for(let i = 0; i < arrayStr.length ; i++){
     if(arrayStr[i].length > longestLengthSubstring){
       longestSubstring = arrayStr[i];
       longestLengthSubstring = arrayStr[i].length;
     }
   }
   return longestLengthSubstring;
 }

 console.log(findLongestWordLength("This sentence given as input for finding longest word length"));