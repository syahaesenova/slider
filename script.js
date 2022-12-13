const leftBtn = document.querySelector(".left-button");
const rightBtn = document.querySelector(".right-button");
const mainSlide = document.querySelector(".main-slide");
const container = document.querySelector(".container");
const slideCount = document.querySelectorAll(".div").length;

let activeSlideIndex = 0;

leftBtn.addEventListener("click", () => {
  moveSlide("left");
});
rightBtn.addEventListener("click", () => {
  moveSlide("right");
});

function moveSlide(direction) {
  if (direction === "right") {
    activeSlideIndex++;
    if (activeSlideIndex === slideCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "left") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slideCount - 1;
    }
  }
  const width = container.clientWidth;
  mainSlide.style.transform = `translateX(-${activeSlideIndex * width}px)`;
}
