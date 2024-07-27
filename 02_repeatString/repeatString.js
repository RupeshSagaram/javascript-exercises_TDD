const repeatString = function(aString,number) {

    if(number===0){
        return '';
     } else if(number<0){
        return 'ERROR';
     } else if (aString===''){
        return '';
     }
 
   stringName = aString; 
result = aString.repeat(number);

 return result;
  
};


// Do not edit below this line
module.exports = repeatString;
