$(document).ready(function () {
  $(".nav-btn").click(function () {
    $("#nav").slideToggle();
  });

  $(".nav-btn").blur(function () {
    $("#nav").slideUp();
  });

  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $(".hire-box").css({
        transform: "translateX(-10%)",
      });
      $("nav").css({
        backgroundColor: "#fff",
        boxShadow: " 0px 0px 5px #38383884",
      });
    } else {
      $("nav").css({
        backgroundColor: "transparent",
        boxShadow: " 0px 0px 5px transparent",
      });
    }
  });

  $(".hire-box").click(function () {
    $(this).css({ transform: "translateX(100%)" });
  });
});
