$(document).ready(function () {
  $('#carouselOne').owlCarousel({
    loop: true, //Зацикливаем слайдер
    margin: 20, //Отступ от элемента справа в 50px
    nav: true, //Отключение навигации
    autoplay: true, //Автозапуск слайдера
    smartSpeed: 1000, //Время движения слайда
    autoplayTimeout: 2000, //Время смены слайда
    dots: false,
    responsive: {
      //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
});
