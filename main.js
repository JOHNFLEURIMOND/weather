/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

// 'use strict';
// (function() {
//
//
//   });
// })();

var city = prompt("Enter Your City:"); //variables hold the user's input
var country = prompt("Enter Your Country:");
var temp = 0;
// console.log(city);
// console.log(country);
if (city === "" || country === "") {
  // user pressed OK, but the input field was empty
  alert("OOPS! You Must Enter A City & A Country!")
};


var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "cdbb4ca76406acf8f22bd50280c0bb9b";
$.ajax({
  url: weatherUrl + city + "," + country + "&appid=" + apiKey,

  success: function(r) {
    temp = r.main.temp;
    convert();
  },
  error: function(r) {
    console.log(r);
  }

});

function convert() {
  var temp2 = temp * 9 / 5 - 459.67;
  $('#temperature').html(temp2 + " F");
}