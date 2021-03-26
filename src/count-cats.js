const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  if(!arr) {
    throw Error
  }
  let answer = 0;

  for(let i = 0;i <arr.length;i++){
    for(let j = 0; j< arr[i].length; j++){
      if((arr[i][j]) == '^^'){
        answer ++ 
      }
    }
  }
  return answer > 0 ? answer : 0
};
