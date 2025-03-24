document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelectorAll(".nav-btn");
  const carouselSlides = document.querySelector(".carousel-slides");

  let currentIndex = 0;
  const slideCount = slides.length;

  function updateCarousel() {
    const offset = -currentIndex * 60;
    carouselSlides.style.transform = `translateX(${offset}%)`;
    slides.forEach((slide, index) => {
      if (index === currentIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
    nextBtn.forEach((btn, index) => {
      if (index === currentIndex) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  nextBtn.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      currentIndex = index;
      updateCarousel();
    });
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateCarousel();
  }, 5000);
  updateCarousel();
});
