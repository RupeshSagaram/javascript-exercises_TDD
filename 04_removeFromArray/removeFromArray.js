const removeFromArray = function(anArray, ...values) {
   
    for(let i = 0;i<values.length; i++){
    index = anArray.indexOf(...values);
    newArray = anArray.splice(index,values.length);
    return anArray;
    }
    
  
};

// Do not edit below this line
module.exports = removeFromArray;
