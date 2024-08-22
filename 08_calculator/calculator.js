const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  arrContainer = arr;
  let sum = arrContainer.reduce((total,current) =>{
    return total + current;
  },0);
  return sum;
};

const multiply = function(arr) {
  arrContainer = arr;
    let multiply = arrContainer.reduce((total,current)=>{
        return total * current;
    },1);
    return multiply;
};

const power = function(num,power) {
	return Math.pow(num,power);
};

const factorial = function(num) { 
        if(num===0 || num ===1){
          return 1;
        } else {
          return num * factorial(num-1);
        }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
