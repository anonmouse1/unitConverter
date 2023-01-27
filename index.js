/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let lengthContent = document.getElementById("length-content");
let volumeContent = document.getElementById("volume-content");
let massContent = document.getElementById("mass-content");

function convert() {
  let userInput = document.getElementById("input").value;
  //length conversion
  lengthContent.textContent = `${userInput} meters = ${(
    userInput * 3.281
  ).toFixed(3)} feet | ${userInput} feet = ${(userInput / 3.281).toFixed(
    3
  )} meters `;
  //volume conversion
  volumeContent.textContent = ` ${userInput} liters = ${(
    userInput * 0.264
  ).toFixed(3)} | ${userInput} gallons = ${(userInput / 0.264).toFixed(
    3
  )} liters `;
  //mass conversion
  massContent.textContent = `${userInput} kilos = ${(userInput * 2.204).toFixed(
    3
  )} pounds | ${userInput} pounds = ${(userInput / 2.204).toFixed(3)} kilos`;
}
