const convertToCelsius = function(fahrenheit) {
 // °C = (°F - 32) × 5/9
let celsius = ((fahrenheit - 32 )*(5/9));
 celsius = +(celsius.toFixed(1));
return celsius;
};

const convertToFahrenheit = function(celsius) {
  //°F = (°C × 9/5) + 32
let fahrenheit = ((celsius * (9/5)) + 32);
fahrenheit =  +(fahrenheit.toFixed(1));
return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
