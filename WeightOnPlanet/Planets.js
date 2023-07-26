//Stores HTML elements as variables
const input = document.querySelector(`.calculate-input`); //Takes in the user input
const unit = document.querySelector(`#select-planets`); //Planet options
const resultText = document.querySelector(`.message`); //Gives the total weight of user with a empty paragraph in the HTML

/*const planetTitle = document.querySelector("#planet-title"); //Changes the title shown to the name of the chosen planet in the HTML
const changeImg = document.querySelector(`.planet-img`); //Changes the background image of the planet-img div to the chosen planet in the HTML
*/

//Runs the convertInput function. Called with a onclick from html
//Calculates the weigth of the user based on the chosen planet
const convertInput = () => {
  let result = "";

  if (unit.value === "mars") {
    result = `${input.value}kg equals ${(input.value * 0.38).toFixed(2)}kgs`;
  } else if (unit.value === "moon") {
    result = `${input.value}kg equals ${(input.value * 0.166).toFixed(2)}kgs`;
  } else if (unit.value === "jupiter") {
    result = `${input.value}kg equals ${(input.value * 2.34).toFixed(2)}kgs`;
  } else if (unit.value === "pluto") {
    result = `${input.value}kg equals ${(input.value * 0.06).toFixed(2)}kgs`;
  } else {
    result = "Choose a planet in the dropdown menu!";
  }

  resultText.textContent = result;
};
