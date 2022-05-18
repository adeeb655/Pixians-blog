var input = document.querySelector("#phone");
if (input) {
  window.intlTelInput(input, {
    separateDialCode: true,
    utilsScript: "assets/js/utils.js",
  });
}

$(document).ready(function () {
  setTimeout(function () {
    $(".idea-prototype").addClass("come-in");
  }, 300);

  $("#menu-btn").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $("#menu-btn").removeClass("fixed");
    $(".desktop-menu").toggleClass("active");
  });

  $(".desktop-menu a").click(function () {
    $(".desktop-menu").removeClass("active");
    $("#menu-btn").removeClass("fixed");
    $("#menu-btn").removeClass("active");
  });

  $(window).scroll(function () {
    if ($(".desktop-menu").hasClass("active")) {
      $("#menu-btn").addClass("fixed");
    } else {
      $("#menu-btn").removeClass("fixed");
    }
  });
});

$(document).ready(function () {
  setTimeout(function () {
    $(".idea").addClass("come-in");
  }, 800);
});

$(".toggler").click(function () {
  $(this).next().slideToggle("600");
  $(this).closest(".toggle").siblings().find(".toggle-div").slideUp("600");
  $(this).closest(".toggle").siblings().removeClass("active");
  $(this).closest(".toggle").toggleClass("active");
});

// Variable
var posts = $(".post");

// Click function
$(".sort").click(function () {
  // Get data of category
  var customType = $(this).data("s");
  $(".post").removeClass("active");
  $("[data-cat=" + customType + "]").addClass("active");

  $(".sort").removeClass("active");
  $(this).addClass("active");
});

// All
$("#show-all").click(function () {
  $(".post").addClass("active");
});

if ($(".box-scroll").length > 0) {
  // register the plugin:
  gsap.registerPlugin(ScrollTrigger);
  let boxArr = gsap.utils.toArray(".box-scroll");
  boxArr.forEach((item, index) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".box-scroll",
        start: "top 90%",
        toggleActions: "restart none none reset",
        end: "bottom 90%",
        trigger: item,
      },
    });
    tl.from(item, {
      opacity: 0,
      y: 60,
    });
  });
}

if ($(".svg-Line").length > 0) {
  let lineArr = gsap.utils.toArray(".svg-Line");
  lineArr.forEach((element) => {
    console.log(element);
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".timeLine",
        start: "top 75%",
        end: "bottom 10%",
        scrub: true,
        trigger: element,
      },
    });
    tl2.to(element, {
      height: "100%",
      ease: "none",
      duration: 3,
    });
  });
}

if ($(`[data-custom="fade-up"]`).length > 0) {
  const boxes = gsap.utils.toArray(`[data-custom="fade-up"]`);
  boxes.forEach((box, i) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: box,
        toggleActions: "restart none none reset",
        once: true,
      },
    });
    tl.from(box, {
      opacity: 0,
      duration: 0.5,
      y: 100,
    });
  });
}
