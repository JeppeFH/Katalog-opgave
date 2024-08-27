export function slider() {
  /*JS-Slider*/

  /* Variabler */
  const SliderOutput = document.querySelector(".slides");
  const slides = document.querySelectorAll(".single-slide");

  if (SliderOutput) {
    /*index'et på sidste billede i slideren -1 [0, 1, 2]*/
    let slidesLength = slides.length - 1;

    //variabel der siger at man skal starte med det første billede //
    let currentImageIndex = 0;

    /* function der bestemmer hvilket billede der vises */
    function setActiveSlide(index) {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });

      slides[index].classList.add("active");
    }

    /* function der laver slidereffect */
    function next() {
      if (currentImageIndex >= slidesLength) {
        currentImageIndex = 0;
      } else {
        currentImageIndex += 1;
      }

      setActiveSlide(currentImageIndex);
    }

    /* sørger for at billedet skifter hver 3 sekund */
    setInterval(next, 6000);

    /* Sørger for at det første billede kommer med det samme  og ikke efter
  3 sekunder */
    setActiveSlide(currentImageIndex);

    /* sliderbillede array */
    const imageSources = [
      "./assets/img/hero/hero-img1.jpg",
      "./assets/img/hero/hero-img2.jpg",
      "./assets/img/hero/hero-img3.jpg",
      "./assets/img/hero/hero-img4.jpg",
      "./assets/img/hero/hero-img5.jpg",
      "./assets/img/hero/hero-img6.jpg",
    ];

    /* Billedbeskrivelse array */
    const slideContents = ["", "", "", "", "", ""];

    slides.forEach((slide, index) => {
      const content = slide.querySelector(".slide-content");
      const image = slide.querySelector("img");

      content.textContent = slideContents[index];

      image.src = imageSources[index];
    });

    /* Next button function */
    const nextBtn = document.querySelector(".next-btn");
    const previousBtn = document.querySelector(".previous-btn");

    function previous() {
      currentImageIndex -= 1;
      setActiveSlide(currentImageIndex);
    }

    nextBtn.addEventListener("click", next);
    previousBtn.addEventListener("click", previous);
  }
}
