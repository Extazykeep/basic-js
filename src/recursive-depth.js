const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr)  {
    let maxdepth = 0;
    for ( let item of arr ) { 
      if(Array.isArray(item)){
        let depth = this.calculateDepth(item)
        if ( depth > maxdepth ) 
        maxdepth = depth; 
      }
      
    } 
  return maxdepth + 1; 
  }
};