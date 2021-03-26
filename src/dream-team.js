const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if(!Array.isArray(arr)){return false}
  let kek1 = arr.filter(a=> typeof(a)=== "string").map(a=>a.trim()).sort()
  let kek  = []
  let answer = "";
  for(let i = 0; i< kek1.length; i++){
   kek.push(kek1[i][0].toUpperCase())
  }

     return kek.sort().join("")
};
