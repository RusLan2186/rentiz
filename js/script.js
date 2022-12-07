const swiper = new Swiper(' .popular-slider', {
   spaceBetweem: 20,
   slidesPerView: 1,
   speed: 800,

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   effect: 'slide',
   breakpoints: {
      992: {
         slidesPerView: 3,
      },
      660: {
         slidesPerView: 2,
      },
      320: {
         slidesPerView: 1.2,

      }
   },

});


const swiper2 = new Swiper('.why-slaider', {
   spaceBetweem: 20,
   slidesPerView: 1,
   speed: 800,

   // loop: true,
   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   breakpoints: {

      320: {
         slidesPerView: 1.1,

      }
   },


});

$(document).ready(function () {
   $("#menu").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1500);
   });
});

$(document).ready(function () {
   // на header burger вешаем событие клик
   $('.header__burger').click(function (event) {
      // при клике на бургер и хедер меню добавился класс aktive (нажали-добав класс, нажали-убрался класс) 
      $('.header__burger, .header__menu').toggleClass('active');
      // при открытом бургере блокируем прокрутку страницы
      $('body').toggleClass('lock');
   });
});

// закрытие бургера, при нажатии на меню
const headerLinks = document.querySelectorAll('.header__menu')
headerLinks.forEach((el) => {
   el.addEventListener('click', () => {
      $('.header__burger,.header__menu').toggleClass('active');
   })
})

// добавляем констатну "фильтр"
const filter = document.querySelector('.filter');
// делаем проверку, есть ли на странице "фильтр"
if (filter) {
   // получаем все блоки в которых есть в фильтре
   const items = filter.querySelectorAll('.block-filter')
   // перебираем все элементы и навешиваем на них событие "клик"
   items.forEach(item => {
      item.addEventListener('click', event => {
         // при клике показываем drobdown меню
         item.querySelector('.block-filter__dropdown').classList.toggle('_active');
         // при клике переворачиваем стрелочку
         item.querySelector('.block-filter__icon').classList.toggle('_active');
         if (event.target.classList.contains('block-filter__item')) {
            item.querySelector('.block-filter__value').textContent = event.target.textContent;
         }


      })
   })
}


AOS.init({
   // Global settings:
   disable: 'mobile',  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
   initClassName: 'aos-init', // class applied after initialization
   animatedClassName: 'aos-animate', // class applied on animation
   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
   offset: 500, // offset (in px) from the original trigger point
   delay: 0, // values from 0 to 3000, with step 50ms
   duration: 1000, // values from 0 to 3000, with step 50ms
   easing: 'ease', // default easing for AOS animations
   once: false, // whether animation should happen only once - while scrolling down
   mirror: false, // whether elements should animate out while scrolling past them
   anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation


});


$(document).ready(function () {
   // ссылка, на которую нажимаем 
   $('.spoiler__link').click(function (event) {
      // общий класс спойлера
      if ($('.footer-top__spoiler').hasClass('one')) {
         // ссылка, на которую нажимаем 
         $('.spoiler__link').not($(this)).removeClass('hidden');
         // блок который идет сразу после ссылки
         $('.menu-list').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('hidden').next().slideToggle(300);
   });
});