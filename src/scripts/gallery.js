const swiper1 = new Swiper(".swiperCarousel1", {
  slidesPerView: 5,
  centeredSlides: true,
  spaceBetween: 10,
  keyboard: {
    enabled: true,
  },
  loop: true,
  loopedSlides: 3,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

const slides1 = document.getElementsByClassName("swiper-slide");
for (const slide of slides1) {
  slide.addEventListener("click", () => {
    // Função específica para o carrossel 1
    console.log("Clique no slide do carrossel 1");
    const { className } = slide;
    if (className.includes("swiper-slide-next")) {
      swiper1.slideNext();
    } else if (className.includes("swiper-slide-prev")) {
      swiper1.slidePrev();
    }
  });
}
