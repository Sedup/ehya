var menuButton = $(".navbar-top__menu-button");
menuButton.on("click", function () {
  $(".navbar-bottom").toggleClass("navbar-bottom__mobile--visible");
});

var closeButton = $(".navbar-bottom__menu-close");
closeButton.on("click", function () {
  $(".navbar-bottom").toggleClass("navbar-bottom__mobile--visible");
});