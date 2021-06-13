const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const body = document.querySelector("body");
const chosenImage = images[Math.floor(Math.random() * images.length)];

const background = document.createElement("img");
background.src = `assets/${chosenImage}`;
background.classList.add("absolute");
background.classList.add("bg-cover");
background.classList.add("h-full");
background.classList.add("w-full");
background.classList.add("z-0");
body.appendChild(background);
