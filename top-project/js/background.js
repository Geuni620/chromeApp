const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
// const bgImage = document.createElement("img");
const bgImage = document.querySelector(".frame");

console.dir("bgimage");

bgImage.src = `img/${chosenImage}`;
console.log(bgImage);
document.body.appendChild(bgImage);
