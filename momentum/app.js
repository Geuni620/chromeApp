const colors = ["green", "blue", "red", "purple"];

const h2 = document.querySelector(".hello h2");
console.dir(h2);

const superEventHandler = {
  handleMouseEnter: function () {
    h2.innerText = "The mouse is here";
    h2.style.color = colors[0];
  },
  handleMouseLeave: function () {
    h2.innerText = "The mouse is gone";
    h2.style.color = colors[1];
  },
  handleWindowResize: function () {
    h2.innerText = "You juse resized!";
    h2.style.color = colors[3];
  },
  handleMouseCountextmenu: function () {
    h2.innerText = "That was a right click";
    h2.style.color = colors[2];
  },
};

h2.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
h2.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener(
  "contextmenu",
  superEventHandler.handleMouseCountextmenu
);
window.addEventListener("resize", superEventHandler.handleWindowResize);

//1. 마우스가 title위로 올라가면 텍스트가 변경.
//2. 마우스 title을 벗어나면 텍스트가 변경.
//3. 브라우저 창의 사이즈가 변하면 title이 변경
//4. 마우스를 우 클릭하면 title 변경
//5. title의 색상은 colors 배열에 있는 색을 사용해야 함.
//6. .css .html 파일을 수정하지 말 것
//7. 모든 함수 핸들러는 superEventHandler 내부에 작성.
//8. 모든 조건이 충족되지 못하면 x
