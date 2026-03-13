const hero = document.querySelector("#hero");
const cursor = document.querySelector(".cursor");

hero.addEventListener("mousemove", (event) => {
  cursor.style.left = event.x + "px";
  cursor.style.top = event.y + "px";
});

hero.addEventListener("mouseenter", (event) => {
  cursor.style.opacity = 1;
});

hero.addEventListener("mouseleave", () => {
  cursor.style.opacity = 0;
});

const ele = document.querySelectorAll(".elem");
ele.forEach((one) => {
 const img=one.querySelector('img');
  one.addEventListener("mouseenter", (event) => {
    img.style.opacity = 1;
  });

  one.addEventListener("mouseleave", () => {
    img.style.opacity = 0;
  });

  one.addEventListener('mousemove',(e)=>{
    img.style.left = e.offsetX + "px";
    img.style.top = e.offsetY + "px";
  })
});
