$(document).ready(function () {
  var menuButton = $(".navbar-top__menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom__mobile--visible");
  });

  var closeButton = $(".navbar-bottom__menu-close");
  closeButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom__mobile--visible");
  });

  var tabsItem = $(".trands-menu__tabs-item");
  var cardsItem = $(".trands-cards__item");

  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("trands-menu__tabs-item-active");
    $(this).addClass("trands-menu__tabs-item-active");


    if (activeContent == "best") {
      $(cardsItem).css('order', '');
      for (i = 6, j = 1; i >= 0; i--) {
        $(cardsItem[i]).css('order', j);
        j++;
      };
    }
    else if (activeContent == "soon") {
      $(cardsItem).css('order', '');
      for (i = 0; i < 7; i++) {
        let j = Math.floor(Math.random() * (20 - 1)) + 1;
        $(cardsItem[i]).css('order', j);
      };
    }
    else $(cardsItem).css('order', '');
  });

  //Slider

  var reviewsSwiper = new Swiper('.reviews__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
      delay: 7000,
    },

    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });

        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
    },
  });

  var storiesSwiper = new Swiper('.stories__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    autoplay: {
      delay: 7000,
    },

    navigation: {
      nextEl: '.slider-navigation__button-next',
      prevEl: '.slider-navigation__button-prev',
      disabledClass: 'slider-navigation__button-unactive'
    },
  });

  // Валидация формы

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        newEmail: {
          required: "Пожалуйста введите e-mail",
          email: "Некорректный e-mail",
        },
      },
    });
  });

});