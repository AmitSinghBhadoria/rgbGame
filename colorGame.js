var numSquares = 6;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var pickedColor = pickColor();
var easyButtom = document.querySelector("#easyBtn");
var hardButtom = document.querySelector("#hardBtn");
createColorBoxes();

resetButton.addEventListener("click", function() {
  // generate Random color
  colors = generateRandomColor(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colors of squares
  colorDisplay.textContent = pickedColor;
  createColorBoxes();
  h1.style.backgroundColor = "steelblue";
});

easyButtom.addEventListener("click", function() {
  easyButtom.classList.add("selected");
  hardButtom.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColor(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i< squares.length;  i++) {
      if(colors[i]) {
    squares[i].style.backgroundColor = colors[i];
      } else {
        squares[i].style.display = "none";
      }
  }
});

hardButtom.addEventListener("click", function() {
  hardButtom.classList.add("selected");
  easyButtom.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColor(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i< squares.length;  i++) {
  squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
}
});

console.log(squares);
colorDisplay.textContent = pickedColor;

function createColorBoxes() {
  for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add clicklisters to each square
    squares[i].addEventListener("click", function() {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "CORRECT";
        resetButton.textContent = "PLAY AGAIN";
        h1.style.backgroundColor = clickedColor;
        changeColors(clickedColor);
      } else {
        this.style.backgroundColor = "black";
        messageDisplay.textContent = "TRY AGAIN";
      }
    });
  }
}

function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //Change Each color to match correct color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  //pick a random number between 1 to 6
  var randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
}

function generateRandomColor(quant) {
  //Make an Array
  var colorArray = [];
  //add Quant random colors to array
  for (var i = 0; i < quant; i++) {
    colorArray.push(randomColor());
  }
  //return that array
  return colorArray;
}

function randomColor() {
  //pick a red from 0 to 255,
  var redValue = Math.floor(Math.random() * 256);
  //pick a green from 0 to 255,
  var greenValue = Math.floor(Math.random() * 256);
  //pick a blue from 0 to 255
  var blueValue = Math.floor(Math.random() * 256);
  //return a random RGB color
  return " RGB(" + redValue + ", " + greenValue + ", " + blueValue + ")";
}
