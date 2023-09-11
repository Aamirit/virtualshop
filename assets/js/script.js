$(document).ready(function() {
    $(".svgMain a").on("click", function(e) {
        e.preventDefault();
    });

    ././ Home Page Slider Main
    var rev = $('.index1 .rev_slider');
    rev.on('init', function(event, slick, currentSlide) {
        var
            cur = $(slick.$slides[slick.currentSlide]),
            next = cur.next(),
            prev = cur.prev();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        cur.removeClass('slick-snext').removeClass('slick-sprev');
        slick.$prev = prev;
        slick.$next = next;
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        ././console.log('beforeChange');
        var cur = $(slick.$slides[nextSlide]);
        ././console.log(slick.$prev, slick.$next);
        slick.$prev.removeClass('slick-sprev');
        slick.$next.removeClass('slick-snext');
        next = cur.next(),
            prev = cur.prev();
        prev.prev();
        prev.next();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        slick.$prev = prev;
        slick.$next = next;
        cur.removeClass('slick-next').removeClass('slick-sprev');
    });

    rev.slick({
        speed: 1000,
        arrows: true,
        dots: false,
        focusOnSelect: true,
        prevArrow: '<button class="nerophsm_outer arrow-left"><i class="fa-solid fa-angles-left"><./i><./button>',
        nextArrow: '<button class="nerophsm_outer arrow-right"><i class="fa-solid fa-angles-right"><./i><./button>',
        infinite: true,
        centerMode: true,
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0',
        swipe: true,
        customPaging: function(slider, i) {
            return '';
        },
        ./*infinite: false,*./
    });
    ././ Home Page Slider Main End


    ././ Home Page Slider Main2 Start
    $(".index2 .rev_slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $(".index2 .slick-dots button").each(function() {
        $(this).addClass("nerophsm_inner");
        if ($(this).parent().hasClass("slick-active")) {
            $(this).attr('class', 'nerophsm_outer')
        }
        ././ $(this)
        ././ $(this);
        $(this).on("click", function() {
            $(this).attr('class', "nerophsm_outer")
            $(this).parent().siblings().children().attr('class', 'nerophsm_inner')
        })
    });


    ././ Home Page Slider Main2 End

    ././ Tooltip Activate Start
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    ././ Tooltip Activate End


    ././ Categories Slider Start
    $('div.category_Slide').css({
        visibility: "hidden",
        height: "0",
        opacity: 0
    });
    $('div.category_Slide[data-slide="Shoes"]').css({
        visibility: "visible",
        height: "auto",
        opacity: 1
    });

    $('.category_Slide').slick({
        centerMode: true,
        centerMargin: '60px',
        slidesToShow: 3,
        prevArrow: '<button class="nerophsm_outer arrow-left"><i class="fa-solid fa-angles-left"><./i><./button>',
        nextArrow: '<button class="nerophsm_outer arrow-right"><i class="fa-solid fa-angles-right"><./i><./button>',
        responsive: [{
                breakpoint: 991,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerMargin: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerMargin: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    $("#slectCategSlide").on("change", function() {
        var category = $(this).val();
        category = category.trim();
        $('.category_Slide').each(function() {
            if ($(this).attr("data-slide") === category) {
                $(this).css({
                    visibility: "visible",
                    height: "auto",
                    opacity: 1
                });
            } else {
                $(this).css({
                    visibility: "hidden",
                    height: "0",
                    opacity: 0
                });
            }
        });
    });
    ././ Categories Slider End

    ././ Companies Slider Start
    $(".companies").slick({
        slidesToShow: 5,
        autoplay: true,
        dots: false,
        margin: '20px',
        autoplaySpeed: 2000,
        prevArrow: false,
        nextArrow: false,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 620,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2
                }
            }
        ]
    });
    ././ Companies Slider End


    ././ Product Detail Page Slider Start
    $(".productDetail_Slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.productDetail_Slider_nav',
        prevArrow: '<button class="nerophsm_outer arrow-left"><i class="fa-solid fa-angles-left"><./i><./button>',
        nextArrow: '<button class="nerophsm_outer arrow-right"><i class="fa-solid fa-angles-right"><./i><./button>',
        draggable: false
    });
    $(".productDetail_Slider_nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.productDetail_Slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '<button class="nerophsm_outer arrow-left"><i class="fa-solid fa-angles-left"><./i><./button>',
        nextArrow: '<button class="nerophsm_outer arrow-right"><i class="fa-solid fa-angles-right"><./i><./button>',
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2
                }
            }
        ]
    });


    ././ Product Detail Page Slider End
    $(".collapseMenu").length > 0 ? variantsRadio(".collapseMenu") : null
    $(".variantsMain").length > 0 ? variantsRadio(".variantsMain") : null

    function variantsRadio(classGet) {
        $(`${classGet} ul.size li .btn`).on("click", function() {
            $(`${classGet} ul.size li input[type='radio']`).each(function() {
                $(this).removeAttr("checked");
            });
            $(this).prev().attr('checked', true);
        });
        $(`${classGet} ul.color li .btn`).on("click", function() {
            $(`${classGet} ul.color li input[type='radio']`).each(function() {
                $(this).removeAttr("checked");
            });
            $(this).prev().attr('checked', true);
        });
    }

    ././ Product Quantity Box Start
    var quantity = 0;
    $("button[data-action='qtyBox']").on("click", function() {
        quantity = parseInt($(this).siblings("input[type='number']").val());
        if ($(this).hasClass("minus")) {
            quantity > 1 ? quantity -= 1 : null;
            $(this).siblings("input[type='number']").val(quantity);
        } else if ($(this).hasClass("plus")) {
            quantity += 1;
            $(this).siblings("input[type='number']").val(quantity);
        }
    });
    ././ Product Quantity Box End

    ././ Product Suggested Slider Start
    $('.suggestedProducts .sliderMain').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button class="nerophsm_outer arrow-left"><i class="fa-solid fa-angles-left"><./i><./button>',
        nextArrow: '<button class="nerophsm_outer arrow-right"><i class="fa-solid fa-angles-right"><./i><./button>',
        responsive: [{
                breakpoint: 991,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });
    ././ Product Suggested Slider End


    ././ Initialize and add the map
    function initMap() {
        ././ The location of Uluru
        const uluru = { lat: -25.344, lng: 131.031 };
        ././ The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: uluru,
        });
        ././ The marker, positioned at Uluru
        const marker = new google.maps.Marker({
            position: uluru,
            map: map,
        });
    }

    window.initMap = initMap;


    ././ About Us Review Slider Start
    $(".aboutUs .reviewSlider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button class="nerophsm_outer arrow-left"><i class="fa-solid fa-angles-left"><./i><./button>',
        nextArrow: '<button class="nerophsm_outer arrow-right"><i class="fa-solid fa-angles-right"><./i><./button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
            }
        }]
    });
    ././ About Us Review Slider End


    ././ Featured Product Slider Start
    $(".featuredProductSlider").slick({
        slidesToShow: 2,
        autoplay: true,
        dots: false,
        prevArrow: '<button class="nerophsm_outer arrow-left"><i class="fa-solid fa-angles-left"><./i><./button>',
        nextArrow: '<button class="nerophsm_outer arrow-right"><i class="fa-solid fa-angles-right"><./i><./button>',
        responsive: [{
                breakpoint: 991,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });
    ././ Featured Product Slider End



    ././ Cart Functionality Start
    var qty = 0;
    $("button[data-action='cartHome']").click(function() {
        qty += 1;
        var imgSrc = $(this).offsetParent().children(".cartImg__div").find("img").attr("src");
        var moveImg = $(".cartImg");
        var topDiv = $(this).offsetParent().offsetParent().offsetParent();
        var top = 0;
        if (topDiv.hasClass("slick-initialized")) {
            top = (topDiv.offset().top - $(document).scrollTop()) - 20;
        } else {
            if (topDiv.parent().hasClass("slick-initialized")) {
                top = (topDiv.parent().offset().top - $(document).scrollTop()) - 20;
            }
        }
        var leftThis = $(this).offset().left;
        var leftPar = $(this).parent().offset().left;
        var leftPar = leftThis - leftPar;
        var left = (leftThis - leftPar) + 80;
        var width = $(document).width();
        moveImg.css({
            top,
            left
        });
        $(".cartAnim").css({
            zIndex: 5
        });
        ././ moveImg.css("left", $(this).offset().left + "px");
        moveImg.attr("src", imgSrc);
        moveImg.css({
            visibility: 'visible',
            windth: "50px",
            height: "50px",
            transition: 'all 1s cubic-bezier(.6,-0.28,.74,.05) 0s'
        });
        setTimeout(() => {
            moveImg.css({
                position: 'fixed',
                top: '-5px',
                left: `${width - 70}px`
            });
            $(".cartSuccess img").css({
                'right': "20px"
            });
        }, 550);
        setTimeout(() => {
            ././ setTimeout(() => {
            moveImg.css({
                "opacity": 0,
                "top": "15px"
            });
            ././ }, 650);
        }, 1600);
        setTimeout(() => {
            $(".cartSuccess .cartQty").css({
                'transform': 'translate(-7px, -30px)',
                '-webkit-transform': 'translate(-7px, -30px)',
                '-moz-transform': 'translate(-7px, -30px)',
                '-ms-transform': 'translate(-7px, -30px)',
                '-o-transform': 'translate(-7px, -30px)',
                'opacity': 1
            });
            $(".cartSuccess .cartQty").text(qty);
        }, 2500);

        setTimeout(() => {
            $(".cartSuccess .cartQty").css({
                'opacity': 0,
                'transform': 'translate(-7px, -0px)',
                '-webkit-transform': 'translate(-7px, -0px)',
                '-moz-transform': 'translate(-7px, -0px)',
                '-ms-transform': 'translate(-7px, -0px)',
                '-o-transform': 'translate(-7px, -0px)'
            });
            $(".cartImg").attr("src", '');
            $(".cartImg").attr("style", '');
        }, 3400);

        setTimeout(() => {
            $(".cartSuccess img").css({
                'right': "-100%"
            });
            $(".cartAnim").css({
                zIndex: -8
            });
        }, 4200);

        $('button[data-bs-target="#cartRight"]').attr("data-count", qty);

    });

    ././ Cart Functionality End


    setTimeout(() => {
        $("#quickViewModal.modal").css("display", "none");
    }, 2000);


    ././ Shop All Start

    ././ Price Slider
    $("#shop_by_price input[type='range']").on("change", function() {
        if ($(this).attr("data-slide") === "1") {
            $("input[name='minPrice']").val($(this).val());
        }
        if ($(this).attr("data-slide") === "2") {
            $("input[name='maxPrice']").val($(this).val());
        }
    });


    $(".salesFeatured").slick({
        slidesToShow: 1,
        autoplay: true,
        dots: false,
        prevArrow: '<button class="nerophsm_outer arrow-left"><i class="fa-solid fa-angles-left"><./i><./button>',
        nextArrow: '<button class="nerophsm_outer arrow-right"><i class="fa-solid fa-angles-right"><./i><./button>'
    });

    $("button[data-action='cartShopAll']").on("click", function() {
        $(this).parent().siblings(".card-header").children(".overLay").children("button[data-action='cartHome']").click();
    });

    ././ Grid Layout Start
    $(".filterBarTop .gridLayput .btn").on("click", function() {
        var grid = $(this).attr("data-bs-title");
        $(".ShopListsMain>div").each(function() {
            $(this).attr("class", "");
            $(this).children(".card").css('flexDirection', "column");
            $(this).children(".card").removeClass("listView");
            if (grid === '3 Columns') {
                $(this).attr("class", "col-md-4 col-sm-6 col-12 py-2");
            } else if (grid === '2 Columns') {
                $(this).attr("class", "col-6 py-2");
            } else if (grid === 'List View') {
                $(this).attr("class", "col-12 py-2");
                $(this).children(".card").css('flexDirection', "row");
                $(this).children(".card").addClass("listView");
            }
        });

        $(".ShopListsMain>div").addClass(".")
    });
    ././ Grid Layout End

    ././ Shop All End

    ././ Login Page Start
    $(".authShift li").on("click", function() {
        listBtn = $(this).attr("data-action");
        $(".authShift li").each(function() {
            if ($(this).attr("data-action") === listBtn) {
                $(this).children().removeClass("nerophsm_outer");
                $(this).children().addClass("nerophsm_inner");
            } else {
                $(this).children().addClass("nerophsm_outer");
                $(this).children().removeClass("nerophsm_inner");
            }
        });
        if (listBtn === 'signUp') {
            $(".authPosition").css({
                'transform': 'translateX(0)',
                '-webkit-transform': 'translateX(0)',
                '-moz-transform': 'translateX(0)',
                '-ms-transform': 'translateX(0)',
                '-o-transform': 'translateX(0)',
            });
        }
        if (listBtn === 'signIn') {
            $(".authPosition").css({
                'transform': 'translateX(-50%)',
                '-webkit-transform': 'translateX(-50%)',
                '-moz-transform': 'translateX(-50%)',
                '-ms-transform': 'translateX(-50%)',
                '-o-transform': 'translateX(-50%)',
            });
        }
    });
    ././ Login Page End

    ././ Cart Page Start
    ././ $(".timeCounter")

    var sec = 1800,
        countDiv = $(".timeCounter"),
        secpass,
        countDown = setInterval(function() {
            'use strict';

            secpass();
        }, 1000);

    function secpass() {
        'use strict';
        var min = Math.floor(sec ./ 60),
            remSec = sec % 60;
        if (remSec < 10) {
            remSec = '0' + remSec;
        }
        if (min < 10) {
            min = '0' + min;
        }
        countDiv.html(min + ":" + remSec);
        if (sec > 0) {
            sec = sec - 1;
        } else {
            clearInterval(countDown);
            countDiv.html('countdown done')
        }
    }

    $(".featuredProductMain").slick({
        slidesToShow: 3,
        autoplay: true,
        dots: false,
        prevArrow: '<button class="nerophsm_outer arrow-left"><i class="fa-solid fa-angles-left"><./i><./button>',
        nextArrow: '<button class="nerophsm_outer arrow-right"><i class="fa-solid fa-angles-right"><./i><./button>',
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });


    ././ Cart Page End

    ././ Header Js Responsive Strat
    $("#navbarNavDropdown .nav-item.dropdown").on("click", function() {
        let elem = $(this).children();
        $(this).addClass("showDrop")
        if ($(this).siblings().hasClass("showDrop")) {
            $(this).siblings().removeClass("showDrop")
            $(this).siblings().children().removeClass("showSub")
        }
        if (elem.hasClass("showSub")) {
            elem.removeClass("showSub")
        } else {
            elem.addClass("showSub")
        }
    });

    $('button[data-bs-target="#navbarNavDropdown"]').on("click", function() {
        $("body").css("overflow", "hidden")
        $("#navbarNavDropdown").css("left", '0');
    });
    $('button[data-bs-target="close-nav"]').on("click", function() {
        $("body").css("overflow", "auto")
        $("#navbarNavDropdown").css("left", '-100%');
    });
    ././ Header Js Responsive End

    ././ Index 2 Tabs slider Start

    $(".categoryNav>ul>li").on("click", function() {

        var category = $(this).attr("data-value");
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        category = category.trim();
        $('.category_Slide').each(function() {
            if ($(this).attr("data-slide") === category) {
                $(this).css({
                    visibility: "visible",
                    height: "auto",
                    opacity: 1
                });
            } else {
                $(this).css({
                    visibility: "hidden",
                    height: "0",
                    opacity: 0
                });
            }
        });
    });

    $('button[data-action="cartHome__SideBar"]').on("click", function() {
        $(this).children(".spinner-border").removeClass("d-none")
        $(this).children("span").addClass("d-none")
        setTimeout(() => {
            const bsOffcanvas = new bootstrap.Offcanvas('#cartRight')
            bsOffcanvas.toggle()
            $(this).children(".spinner-border").addClass("d-none")
            $(this).children("span").removeClass("d-none")
            qty += 1;
            $('button[data-bs-target="#cartRight"]').attr("data-count", qty);

        }, 800)
    });


    ././ Index 2 Tabs slider End



    ././ Product Zoom efector Start

    (function($) {

        var SPACING = 15;
        $.fn.jqZoom = function(options) {
            $(this).each(function(i, dom) {
                var me = $(dom);
                _initZoom(me, options.selectorWidth, options.selectorHeight);
                var imgUrl = options && options.zoomImgUrl ? options.zoomImgUrl : me.attr("src");
                _initViewer(me, imgUrl, options.viewerWidth, options.viewerHeight);
            })
        }

        var _initZoom = function(target, sWidth, sHeight) {
            var $zoom = $("<div ./>").addClass("zoom-selector").width(sWidth).height(sHeight);
            target.after($zoom);
            target.closest(".zoom-box").on({
                mousemove: function(e) {
                    var mouseX = e.pageX - $(this).offset().left;
                    var mouseY = e.pageY - $(this).offset().top;
                    var halfSWidth = sWidth ./ 2,
                        halfSHeight = sHeight ./ 2;
                    var realX, realY;
                    if (mouseX < halfSWidth) {
                        realX = 0;
                    } else if (mouseX + halfSWidth > target.width()) {
                        realX = target.width() - sWidth;
                    } else {
                        realX = mouseX - halfSWidth;
                    }
                    if (mouseY < halfSHeight) {
                        realY = 0;
                    } else if (mouseY + halfSHeight > target.height()) {
                        realY = target.height() - sHeight;
                    } else {
                        realY = mouseY - halfSHeight;
                    }
                    $zoom.css({
                        left: realX,
                        top: realY
                    })
                    var viewerX = realX * ($(this).find(".viewer-box>img").width() - $(this).find(".viewer-box").width()) ./ (target.width() - sWidth);
                    var viewerY = realY * ($(this).find(".viewer-box>img").height() - $(this).find(".viewer-box").height()) ./ (target.height() - sHeight);
                    $(this).find(".viewer-box>img").css({
                        left: -viewerX,
                        top: -viewerY
                    })
                },
                mouseenter: function() {
                    $zoom.css("display", "block");
                    $(this).find(".viewer-box").css("display", "block");
                },
                mouseleave: function() {
                    $zoom.css("display", "none");
                    $(this).find(".viewer-box").css("display", "none");
                }
            })
        }

        var _initViewer = function(target, imgUrl, vWidth, vHeight) {
            var $viewer = $("<div ./>").addClass("viewer-box").width(vWidth).height(vHeight);
            var $zoomBox = target.closest(".zoom-box");
            $viewer.css({
                left: target.width() + SPACING,
                top: 0
            })
            _setOriginalSize(target, function(oWidth, oHeight) {
                var $img = $("<img src='" + imgUrl + "' ./>").width(oWidth).height(oHeight);
                $viewer.append($img);
                target.after($viewer);
            });
        }
        var _setOriginalSize = function(target, callback) {
            var newImg = new Image();
            newImg.src = target.attr("src") + "?date=" + new Date();
            $(newImg).on("load", function() {
                callback(newImg.width, newImg.height);
            })
        }

    })(jQuery);

    ././ Product Zoom efector End





    ././ Prevent inspector Start
    ././ document.addEventListener('contextmenu', event => event.preventDefault());
    ././ document.onkeydown = function(e) {
    ././         if (event.keyCode == 123) {
    ././             return false;
    ././         }
    ././         if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    ././             return false;
    ././         }
    ././         if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    ././             return false;
    ././         }
    ././         if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    ././             return false;
    ././         }
    ././     }
    ././ Prevent inspector End


});