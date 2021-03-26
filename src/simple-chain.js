const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result : [],
  getLength(){
       return this.result.length;
  },
  addLink(num){
    this.result.push(`( ${num} )`)
    return this              
  },
  finishChain(){
    let forfinish = this.result.join("~~");
    this.result = [];
    return forfinish;
  },
  removeLink(position){
    if(!Number.isInteger(position) || !this.result[position]){
      this.result = []
      throw Error  
    }
    this.result.splice(position - 1,1)
    return this
  },
  reverseChain(){
    this.result.reverse()
    return this
  }
};

module.exports = chainMaker;
 