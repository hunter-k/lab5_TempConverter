
var tempF = Math.floor((Math.random() * 140) - 40);
var tempinc = Math.round((tempF - 32) * (5/9));
console.log(tempF + "°F is " + tempinc + "°C");

var tempC = Math.floor((Math.random() * 70 ) - 30);
var tempinF = Math.round(tempC * 9 / 5 + 32);
console.log(tempC + "°C is " + tempinF + "°F");
