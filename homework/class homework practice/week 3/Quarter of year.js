const quarterOf = (month) => {
   
    if (month <= 3) {
    return 1
    } else if (6 >= month && month > 3) {
      return 2
    } else if (9 >= month && month > 6) {
      return 3
    } else if (12 >= month && month > 9) {
      return 4
    }
  }

    `else if (6 >= month && month > 3) { return 2` 
 //this is saying if 6 is greater than or equal to the month and the month is greater than -
 //3 return 2


  const quarteROf = (month) =>
  {
  if (month <=  3) return 1
  if (month <=  6) return 2
  if (month <=  9) return 3
  return 4
  } 
 //made R upper case so that it doesnt break the code 

 `if (month <=  3) return 1`
 // this is saying if the month is less than or equal to 3 return 1
  `<= this means less than or equal to`