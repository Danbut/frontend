$(function() {
    $("#bg-layer").hide();

    var slideIndex = 1;
    showSlides(slideIndex);

    $(".slider-button-next").on("click", function() {
        slideIndex = slideIndex + 1;
        showSlides(slideIndex);
    });
    $(".slider-button-previous").on("click", function() {
        slideIndex = slideIndex - 1;
        showSlides(slideIndex);
    });

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slides");

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";
    }

    $(".js-button-map").on("click", function() {
        $(".header").fadeOut()
        $(".main").fadeOut()
        $(".small-map").fadeIn();
    });

    $(".js-button-list").on("click", function() {
        $(".small-map").fadeOut();
        $(".header").fadeIn();
        $(".main").fadeIn();
    });

    $(".js-button-filter").on("click", function() {
        $(".js-filter-toggle").css({ "display": "block" });
        $("#bg-layer").show();
        $(".js-filter-toggle").toggleClass("opened");

    });

    $(".js-close").on("click", function() {
        $("#bg-layer").hide();
        $(".js-filter-toggle").css({ "display": "none" });
        $(".js-filter-toggle").toggleClass("opened");
    });

    var bgLayer = document.getElementById("bg-layer");
    window.addEventListener("scroll", handleScroll);

    function handleScroll() {
        var scrollOffset = window.scrollY;
        if (scrollOffset >= bgLayer.offsetTop) {
            bgLayer.style.position = "fixed";
            return;
        }
        bgLayer.style.position = "absolute";
    }

});