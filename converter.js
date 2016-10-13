var convertType = "c";

function toCelsius (temp) {
	console.log ("celcius function");
	var cTemp = (temp - 32) * 5 / 9;
	return cTemp.toFixed(2) + " degrees Celsius";
}

function toFahrenheit (temp) {
	console.log ("fahrenheit function");
	var cTemp = temp * 9 / 5 + 32;
	return cTemp.toFixed(2) + " degrees Fahrenheit"; 

}

// Get a reference to the button element in the DOM
var button = document.getElementById("calcButton");
var convertFrom = document.getElementById("startTempType");
console.log ("button:", button);
console.log ("convertForm:", convertFrom);

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  convertType = clickEvent;

}

function convertSubmit () {
	var temp = document.getElementById("startingTemp").value;
	var displayElement = document.getElementById("tempDisplay");

	if (convertType === "c") {
		var result = toCelsius(temp);
		console.log ("c res:", result);
	} else {
		var result = toFahrenheit(temp);
		console.log ("f res:", result);
	}

	displayElement.innerHTML = result;

}

function resetFields () {
		var displayElement = document.getElementById("tempDisplay");
		displayElement.innerHTML = "";
}
// Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter;