const reverseString = function(str) {
   /* splitString = str.split('');
    reverseArray = splitString.reverse();
    joinArray = reverseArray.join('');
   */ 


    newString = str.split('').reverse().join('');
    return newString;



};

// Do not edit below this line
module.exports = reverseString;
