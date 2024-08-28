export function slider() {
  const sliders = document.querySelectorAll(".slider-container");

  sliders.forEach((sliderContainer) => {
    const sliderInner = sliderContainer.querySelector(".slider-inner");
    const dotLeft = sliderContainer.querySelector(".dot-left");
    const dotRight = sliderContainer.querySelector(".dot-right");

    dotLeft.addEventListener("click", () => {
      sliderInner.classList.add("slide-right");
      sliderInner.classList.remove("slide-left");
      dotLeft.classList.add("active");
      dotRight.classList.remove("active");
    });

    dotRight.addEventListener("click", () => {
      sliderInner.classList.add("slide-left");
      sliderInner.classList.remove("slide-right");
      dotRight.classList.add("active");
      dotLeft.classList.remove("active");
    });
  });
}
