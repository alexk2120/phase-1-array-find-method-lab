
 function superbowlWin(myArray) {
   let yearWin = myArray.find(element => element.result === "W")

   return (yearWin ? yearWin.year : "undefined");
 }





