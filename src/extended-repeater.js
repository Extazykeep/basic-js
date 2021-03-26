const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
   //string->addition->additionSeparator->separator->repeatTimes
  const additionSeparator = options.additionSeparator || "|";
  const separator = options.separator || "+";
  const addition = options.addition === undefined ? "" : options.addition;
  const repeatTimes = options.repeatTimes;
  const additionRepeatTimes = options.additionRepeatTimes;
  let result = typeof str === "string" ? str  + addition : str + "" + addition;
  let temp = "";
  if(additionRepeatTimes> 0){
    for(let i = 0; i < additionRepeatTimes - 1; i++){
      result += additionSeparator;
      result += addition;
    }
  }
  if(repeatTimes > 0){
      temp += separator
      temp += result
    for(let i = 0; i < repeatTimes - 1; i++){
          result+= temp
    }
  }
  return result
};
  