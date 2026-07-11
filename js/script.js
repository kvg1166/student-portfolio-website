console.log("Welcome to my student portfolio website!");

const button = document.querySelector(".btn");

if(button){

button.addEventListener("mouseover", function(){

button.style.opacity = "0.8";

});

button.addEventListener("mouseout", function(){

button.style.opacity = "1";

});

}// Display welcome message in the browser console
console.log("Welcome to my Student Portfolio Website!");

// Display current year in footer if an element exists
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}