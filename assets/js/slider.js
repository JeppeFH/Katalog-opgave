export function slider() {
  document.addEventListener("DOMContentLoaded", () => {
    const sliderInner = document.querySelector(".slider-inner");
    const sliderBtn = document.querySelector(".slider-btn");

    let isImageVisible = true; // Track the current state

    sliderBtn.addEventListener("click", () => {
      if (isImageVisible) {
        sliderInner.classList.add("slide-left");
        sliderInner.classList.remove("slide-right");
      } else {
        sliderInner.classList.add("slide-right");
        sliderInner.classList.remove("slide-left");
      }
      isImageVisible = !isImageVisible; // Toggle the state
    });
  });
}
