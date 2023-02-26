$(function () {
    jQuery(document).ready(($) => {
        $('.quantity').on('click', '.plus', function (e) {
            let $input = $(this).prev('input.qty');
            let val = parseInt($input.val());
            $input.val(val + 1).change();
        });

        $('.quantity').on('click', '.minus',
            function (e) {
                let $input = $(this).next('input.qty');
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
        $(".sidebar-close").removeClass("d-none")
    });

    $(".sidebar-close").click(function () {
        $(".sidebar-icon").addClass("d-block");
        $(".sidebar-icon").removeClass("d-none")
    });
    $(".sidebar-close").click(function () {
        $(".sidebar-close").addClass("d-none");
        $(".sidebar-close").removeClass("d-block")
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
        $(".container").removeClass("container-ml")
    });

    // product show carousel js //

    $('.product-show-slider .owl-carousel').owlCarousel({
        items: 1,
        loop: false,
        center: true,
        margin: 10,
        dots: false,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash'
    });
    $('.product-show-items .owl-carousel').owlCarousel({
        loop: true,
        dots:false,
        margin: 15,
        navText: [" <i class='fas fa-chevron-left'></i> ", "<i class='fas fa-chevron-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 4,
                nav: true,
                dots:false
            },
            600: {
                items: 5,
                nav: true,
                dots:false
            },
            1000: {
                items: 5,
                nav: true,
                loop: true
            }
        }
    });

});