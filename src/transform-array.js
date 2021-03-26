const CustomError = require("../extensions/custom-error");

module.exports =  function transform(arr) {
  if(!Array.isArray(arr)){
    throw Error
   }
   const newarray = [] 
   for(let i = 0; i < arr.length;i++){
              switch(arr[i]){
                case "--discard-next":                 
                  i++
                  newarray.push("nothingtodouble")
                  break;
                case "--discard-prev":
                  if(i > 0){
                    newarray.pop()
                  }
                  break;
                case "--double-next":
                  if(i< arr.length -1){
                    newarray.push(arr[i+1])
                  }
                  break;
                case "--double-prev":
                    if(i > 0){
                      newarray.push(newarray[newarray.length -1])
                    }
                  break;  
                default: 
                     newarray.push(arr[i]) 
                     break             
              }
   }
   return newarray.filter(a=> a != "nothingtodouble")
};
