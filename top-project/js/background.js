const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
// const bgImage = document.createElement("img");
const bgImage = document.querySelector(".frame");

bgImage.src = `img/${chosenImage}`;

bgImage.style.backgroundImage = `url(${bgImage.src})`;
