(function (flutter) {
    header();
    menu();
    window["sr"] = new scrollReveal();
    if (flutter(".menu-trigger")["length"]) {
        flutter(".menu-trigger")["on"]("click", function () {
            flutter(this)["toggleClass"]("active");
            flutter(".header-area .nav")["slideToggle"](200)
        })
    }
    ;flutter("a[href*=\#]:not([href=\#])")["on"]("click", function () {
        if (location["pathname"]["replace"](/^\//, "") == this["pathname"]["replace"](/^\//, "") && location["hostname"] == this["hostname"]) {
            var flutterHash = flutter(this["hash"]);
            flutterHash = flutterHash["length"] ? flutterHash : flutter("[name=" + this["hash"]["slice"](1) + "]");
            if (flutterHash["length"]) {
                var flutterWidth = flutter(window)["width"]();
                if (flutterWidth < 991) {
                    flutter(".menu-trigger")["removeClass"]("active");
                    flutter(".header-area .nav")["slideUp"](200)
                }
                ;flutter("html,body")["animate"]({scrollTop: (flutterHash["offset"]()["top"]) - 30}, 700);
                return false
            }
        }
    });
    if (flutter(".count-item")["length"]) {
        flutter(".count-item strong")["counterUp"]({delay: 10, time: 1000})
    }
    ;
    if (flutter(".blog-post-thumb")["length"]) {
        flutter(".blog-post-thumb .img")["imgfix"]()
    }
    ;
    if (flutter(".about-image")["length"]) {
        flutter(".about-image")["imgfix"]({scale: 1.1})
    }
    ;
    if (flutter(".page-gallery")["length"] && flutter(".page-gallery-wrapper")["length"]) {
        flutter(".page-gallery")["imgfix"]({scale: 1.1});
        flutter(".page-gallery")["magnificPopup"]({
            type: "image",
            gallery: {enabled: true},
            zoom: {enabled: true, duration: 300, easing: "ease-in-out"}
        })
    }
    ;flutter(window)["on"]("load", function () {
        if (flutter(".cover")["length"]) {
            flutter(".cover")["parallax"]({
                imageSrc: flutter(".cover")["data"]("image"),
                zIndex: "1"
            })
        }
        ;flutter("#preloader")["animate"]({"opacity": "0"}, 600, function () {
            setTimeout(function () {
                if (flutter("#parallax-text")["length"]) {
                    flutter("#parallax-text")["parallax"]({
                        imageSrc: "assets/images/photos/parallax-counter.jpg",
                        zIndex: "1"
                    })
                };
                if (flutter("#counter")["length"]) {
                    flutter("#counter")["parallax"]({
                        imageSrc: "assets/images/photos/parallax-counter.jpg",
                        zIndex: "1"
                    })
                };flutter("#preloader")["css"]("visibility", "hidden")["fadeOut"]()
            }, 300)
        })
    });
    flutter(window)["on"]("scroll", function () {
        header()
    });
    flutter(window)["on"]("resize", function () {
        menu()
    });
    function menu() {
        var flutterWidth = flutter(window)["width"]();
        flutter(".submenu")["on"]("click", function () {
            if (flutterWidth < 992) {
                flutter(".submenu ul")["removeClass"]("active");
                flutter(this)["find"]("ul")["toggleClass"]("active")
            }
        })
    }
    function header() {
        var flutterWidth = flutter(window)["width"]();
        if (flutterWidth > 991) {
            var flutterScroll = flutter(window)["scrollTop"]();
            if (flutterScroll >= 30) {
                flutter(".header-area")["addClass"]("header-sticky")
            } else {
                flutter(".header-area")["removeClass"]("header-sticky")
            }
        }
    }
})(window["jQuery"])