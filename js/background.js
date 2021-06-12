const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const body = document.querySelector("body");
const chosenImage = images[Math.floor(Math.random() * images.length)];

const background = document.createElement("img");
background.src = `assets/${chosenImage}`;
body.appendChild(background);
