const burgerEl = document.querySelector(".burger");
const menu = document.querySelector(".header__container");
if (burgerEl) {
  burgerEl.addEventListener("click", function (e) {
    this.classList.toggle("active");
    document.querySelector(".header__container").classList.toggle("active");
    document.body.classList.toggle("lock");
  });
  menu.addEventListener("click", function () {
    burgerEl.classList.toggle("active");
    this.classList.toggle("active");
    document.body.classList.toggle("lock");
  });
}
const swiper = new Swiper(".promo__swiper", {
  pagination: {
    el: ".promo .swiper-pagination",
    clickable: true,
    slidePerView: 1,
  },
  navigation: {
    nextEl: ".promo .arrow_next",
    prevEl: ".promo .arrow_prev",
  },
});
const swiperClients = new Swiper(".clients__swiper", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 30,
  pagination: {
    el: ".clients .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".clients .arrow_next",
    prevEl: ".clients .arrow_prev",
  },
  breakpoints: {
    200: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1010: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
const swiperTestimonials = new Swiper(".testimonials__swiper", {
  pagination: {
    el: ".testimonials .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".testimonials .arrow_next",
    prevEl: ".testimonials .arrow_prev",
  },
});
