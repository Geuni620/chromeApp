const colors = ["green", "blue", "red", "purple"];

const h1 = document.querySelector(".hello h1");
console.dir(h1);

//1. 마우스가 title위로 올라가면 텍스트가 변경.
function handleMouseEnter() {
  h1.innerText = "The mouse is here";
  h1.style.color = colors[0];
}

//2. 마우스 title을 벗어나면 텍스트가 변경.
function handleMouseLeave() {
  h1.innerText = "The mouse is gone";
  h1.style.color = colors[1];
}

//3. 브라우저 창의 사이즈가 변하면 title이 변경
function handleWindowResize() {
  h1.innerText = "You juse resized!";
  h1.style.color = colors[3];
}

//4. 마우스를 우 클릭하면 title 변경
function handleMouseCountextmenu() {
  h1.innerText = "That was a right click";
  h1.style.color = colors[2];
}

//5. title의 색상은 colors 배열에 있는 색을 사용해야 함.

h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("contextmenu", handleMouseCountextmenu);
window.addEventListener("resize", handleWindowResize);

//6. .css .html 파일을 수정하지 말 것
//7. 모든 함수 핸들러는 superEventHandler 내부에 작성.
//8. 모든 조건이 충족되지 못하면 x
