const palindromes = function (word) {
    let re = /[\W_]/g;
 let str = word.toLowerCase().replace(re,'');
 let reverseStr = str.split('').reverse().join('');
 if(str ===reverseStr){
    return true;
 } else{ 
    return false;
    
 }
};

// Do not edit below this line
module.exports = palindromes;
