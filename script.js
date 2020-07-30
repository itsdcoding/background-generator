var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
function randomNum() {
	return Math.floor((Math.random()*256));
}

//stackOverflow
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}



function changeColors() {
/*	color1.value = rgbToHex(randomNum, randomNum, randomNum);
	color2.value = rgbToHex(randomNum, randomNum, randomNum)*/;

	color1.value = "#6E1111";
	color2.value = "#FFFFFF";
	setGradient();
	//not that much random, but the main idea works
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", changeColors);