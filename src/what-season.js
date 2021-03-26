const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date){ return 'Unable to determine the time of year!'}  
  if (Object.prototype.toString.call(date) !== "[object Date]") throw Error;  
  const sesasons = ["winter","spring","summer","autumn"]
  let month = date.getMonth();
  if(month > 12 || month < 0){
    throw Error 
  }
     if(month >= 2 && month <= 4){
       return sesasons[1]
     }
     if(month >= 5 && month <=7 ){
       return sesasons[2]
     }
     if(month >=8 && month <=10){
       return sesasons[3]
     }
     else {return sesasons[0]}
}