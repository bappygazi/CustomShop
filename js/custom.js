/** @format */

$(function () {
  jQuery(document).ready(($) => {
    $(".quantity").on("click", ".plus", function (e) {
      let $input = $(this).prev("input.qty");
      let val = parseInt($input.val());
      $input.val(val + 1).change();
    });

    $(".quantity").on("click", ".minus", function (e) {
      let $input = $(this).next("input.qty");
      var val = parseInt($input.val());
      if (val > 0) {
        $input.val(val - 1).change();
      }
    });
  });

  // side bar off/on js start //
  $(".sidebar-icon").click(function () {
    $(".sidebar-icon").addClass("d-none");
    $(".sidebar-icon").removeClass("d-block");
  });
  $(".sidebar-icon").click(function () {
    $(".sidebar-close").addClass("d-block");
    $(".sidebar-close").removeClass("d-none");
  });

  $(".sidebar-close").click(function () {
    $(".sidebar-icon").addClass("d-block");
    $(".sidebar-icon").removeClass("d-none");
  });
  $(".sidebar-close").click(function () {
    $(".sidebar-close").addClass("d-none");
    $(".sidebar-close").removeClass("d-block");
  });
  // side bar off/on js end //

  // sideMenu out/in js //
  $(".sidebar-icon").click(function () {
    $(".sideMenu").css("display", "block");
  });
  $(".sidebar-close").click(function () {
    $(".sideMenu").css("display", "none");
  });

  // sideMenu out/in js //
  $(".sidebar-icon").click(function () {
    $(".container").addClass("container-ml");
  });
  $(".sidebar-close").click(function () {
    $(".container").removeClass("container-ml");
  });

  // product show carousel js //

  $(".product-show-slider .owl-carousel").owlCarousel({
    items: 1,
    loop: false,
    center: true,
    margin: 10,
    dots: false,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: "URLHash",
  });
  $(".product-show-items .owl-carousel").owlCarousel({
    loop: true,
    dots: false,
    margin: 15,
    navText: [" <i class='fas fa-chevron-left'></i> ", "<i class='fas fa-chevron-right'></i>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 4,
        nav: true,
        dots: false,
      },
      600: {
        items: 5,
        nav: true,
        dots: false,
      },
      1000: {
        items: 5,
        nav: true,
        loop: true,
      },
    },
  });
  $(window).on("load", function () {
    $("#connectPopup").modal("show");
  });
});

// home page price filter //

$(function () {
  const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-box input"),
    range = document.querySelector(".price-slider .progress");
  let priceGap = 1;

  priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "input-min") {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[70].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });

  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = (minVal / rangeInput[70].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    });
  });
});
