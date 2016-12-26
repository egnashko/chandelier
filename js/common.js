$(document).ready(function() {

    $('.feedback_mark a').on('click', function() {
        $('.feedback_mark a').removeClass('active');
        $(this).addClass('active');
    });

    // NAVIGATION

    $('#nav_btn').click(function () {
       $('.nav_over').toggleClass('nav_transform');
        if ($(window).width() > 992) {
            $('#nav_btn').toggleClass('nav_btn_transform');
        }
    });
    // $("nav").on("swipe",function(){
    //     $('nav').toggleClass('nav_transform');
    // });

    $('input[type = number]').bind('input', function () {
        var $this = $(this);
        if($this.val().length > 5)
            $this.val($this.val().substr(0, 5));
    });

    // DOUBLE_OWL_CAROUSEL

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");

    sync1.owlCarousel({
        singleItem : true,
        slideSpeed : 1000,
        navigation: false,
        pagination:false,
        afterAction : syncPosition,
        responsiveRefreshRate : 200
    });

    sync2.owlCarousel({
        items : 4,
        itemsDesktop      : [1199,10],
        itemsDesktopSmall     : [979,10],
        itemsTablet       : [768,8],
        itemsMobile       : [479,4],
        pagination:false,
        responsiveRefreshRate : 100,
        responsive: false,
        afterInit : function(el){
            el.find(".owl-item").eq(0).addClass("synced");
        }
    });

    function syncPosition(el){
        var current = this.currentItem;
        $("#sync2")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
        if($("#sync2").data("owlCarousel") !== undefined){
            center(current)
        }
    }

    $("#sync2").on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo",number);
    });

    function center(number){
        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for(var i in sync2visible){
            if(num === sync2visible[i]){
                var found = true;
            }
        }

        if(found===false){
            if(num>sync2visible[sync2visible.length-1]){
                sync2.trigger("owl.goTo", num - sync2visible.length+2)
            }else{
                if(num - 1 === -1){
                    num = 0;
                }
                sync2.trigger("owl.goTo", num);
            }
        } else if(num === sync2visible[sync2visible.length-1]){
            sync2.trigger("owl.goTo", sync2visible[1])
        } else if(num === sync2visible[0]){
            sync2.trigger("owl.goTo", num-1)
        }

    }

    // OWL_CAROUSEД

    $('.owl-carousel').owlCarousel({
        items: 4,
        itemsDesktop : [1200,4],
        itemsDesktopSmall : [960,3],
        itemsTablet: [800,2],
        itemsMobile: [550,1],
        autoPlay: 5000,
        scrollPerPage: true
    });

    $('#same_products').owlCarousel({
        items: 4,
        itemsDesktop : [1200,4],
        itemsDesktopSmall : [960,3],
        itemsTablet: [800,2],
        itemsMobile: [550,1],
        autoPlay: 5000,
        scrollPerPage: true
    });

    // ONSCREEN

    function addClass(element, className) {
        var classes = element.getAttribute('class') || '';
        element.setAttribute('class', classes + ' ' + className);
    }
    function removeClass(element, className) {
        var classes = element.getAttribute('class') || '';
        element.setAttribute('class', classes.replace(' ' + className, ''));
    }

    var osVertical = new OnScreen({
        tolerance: 0
    });

    osVertical.on('enter', '.vertical', function(element) {
        addClass(element, 'onScreen');
    });

    // osVertical.on('leave', '.vertical', function(element) {
    //     removeClass(element, 'onScreen');
    // });

    // CATALOG ONSCREEN

    var osVertical_1 = new OnScreen({
        tolerance: -350
    });

    osVertical_1.on('enter', '.vertical_1', function(element) {
        addClass(element, 'onScreen');
    });

    var osVertical_2 = new OnScreen({
        tolerance: -100
    });

    osVertical_1.on('enter', '.vertical_2', function(element) {
        addClass(element, 'onScreen');
    });

    // osVertical.on('leave', '.vertical_1', function(element) {
    //     removeClass(element, 'onScreen');
    // });

    // LOGO ANIM

    $(function logoJump() {
        $('#logo_img').ready(function () {
            $('#logo_img').addClass('nav_logo_jump');
        })
    });

    //CATALOG_BUTTON
    $(function catalogToggleMenu() {
        $('#catalog_menu').click(function () {
            $('.catalog_menu_off').slideToggle(300);
        })
    });

    // BRANDS HOVER AND CLICK

    $(function () {
        if ($(window).width() > '992') {
            $('.catalog_menu .brand_slide').hover(function (event) {
                $('.catalog_menu .brand_slide > a').removeClass('active');
                $(this).children('a').addClass('active');
                $(this).find('.lamp_brands').slideToggle(0);
            });
        }
        else if ($(window).width() <= '992') {
            $('.catalog_menu .brand_slide').click(function (event) {
                $('.catalog_menu .brand_slide > a').removeClass('active');
                $(this).addClass('active');
                $(this).find('.lamp_brands').slideToggle(0);
            });
        }
    });

    // CATALOG MENU SLIDE

    // $('.filter_head').click(function () {
    //    $('.all_filters_main').slideToggle();
    //     $('.my_devider_3').slideToggle();
    //     $('.current_filter').slideToggle();
    //     $('.container_form_second').slideToggle();
    // });
    //
    // $(function catalogFirstSlideDown() {
    //     $('.first_filer').click(function (event) {
    //         event.stopPropagation();
    //         $(this.querySelectorAll('.first_slide')).slideToggle(300);
    //         $(this).toggleClass('catalog_active');
    //     });
    // });
    // $(function catalogSecondSlideDown() {
    //     $('.second_filter').click(function (event) {
    //         event.stopPropagation();
    //         $(this.querySelectorAll('.second_slide')).slideToggle(300);
    //         $(this).toggleClass('catalog_active');
    //     });
    // });
    // $(function () {
    //     $('.second_slide').click(function (event) {
    //         event.stopPropagation();
    //         $(this).toggleClass('catalog_active_dot');
    //     });
    // });
    // $(function () {
    //    $('#size_filter').click(function () {
    //        $('.slider_filters').slideToggle();
    //    });
    // });

    // SEARCH CLICK

    // ARTICLE HEIGHT

    $('.chand_faq').click(function () {
        $(this).find('p').toggleClass('p_class_height');
    });

    // CHARACTERISTICS

    $('.char_head').click(function () {
       $('.hide_char').fadeOut(100);
        $('.all_characteristics').fadeIn(300);
    });
    $('.pay_head').click(function () {
        $('.hide_char').fadeOut(100);
        $('.payment_delivery').fadeIn(300);
    });$('.comm_head').click(function () {
        $('.hide_char').fadeOut(100);
        $('.char_comments').fadeIn(300);
    });

    // PRODUCTS BUTTONS

    $(function () {
        $(".plus_btn").bind("click", chandelierAdd);
        $(".minus_btn").bind("click", chandelierRemove);
        function chandelierAdd(){
            var $input = $(this).parent().find('input');
            $input.val(+$input.val() + 1);
        }
        function chandelierRemove(){
            var $input = $(this).parent().find('input');
            var count = +($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        }
    });

    /*LEFT_REVIEW*/

    $('#reviewButton').click(function () {
       $('.feedback_cont').slideToggle(300);
    });
    
});

// DOC LOAD END --------------

// DOC RESIZE

$(window).resize(function () {

});

// DOC RESIZE END

// MODAL

function changeInput(self) {
    $(self).parent().find('.input_circle').addClass('active_indicator')
}

// PRELOADER

$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});

// CLOSE MODAL

$('.close_modal_btn').click(function () {
    $(this).parent().parent().parent().parent().fadeOut(300);
});

$('.filter_input').change(function () {
    $(this).parent().toggleClass('filter_label_active');
});



// OPEN_MODAL

$('.bucket_part .lock').click(function () {
    $('.modal').fadeIn(300);
});

// OPEN_BUCK_MODAL

$('#bucket').click(function () {
    $('#bucket_modal').fadeIn(300);
});

$('.open_modal_autorize').click(function () {
    $('.modal').fadeOut(300);
    $('.modal_remember').fadeOut(300);
    $('.modal_autorize').fadeIn(300);
});
$('.open_modal_remember').click(function () {
    $('.modal').fadeOut(300);
    $('.modal_autorize').fadeOut(300);
    $('.modal_remember').fadeIn(300);
});
$('.open_reg_modal').click(function () {
    $('.modal_autorize').fadeOut(300);
    $('.modal_remember').fadeOut(300);
    $('.modal').fadeIn(300);
});

// CHANG_CICLE_INPUTS_QUESTIONS

$(function () {
    $('.change_input').bind('input', function () {
        $(this).parent().find('.input_circle').addClass('active_indicator');
    });
});













$('.filter_slide_down').click(function () {
    $(this).parent().children('ul').slideToggle();
    $(this).toggleClass('active');
});

$('.toggle_catalog_tree').click(function () {
    $('.target_catalog_tree').slideToggle();
    $('.catalog_devider').slideToggle();
});




// PRICE SLIDER

$("#example_id").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 30000,
    from: 10000,
    to: 20000,
    
    onChange: function (data) {
        var $range = $("#example_id");

        $range.on("change", function () {
            var $this = $(this),
                value = $this.prop("value").split(";");

            $('#price_inner_1').val(value[0]);
            $('#price_inner_2').val(value[1]);
        });
    }
});

var slider = $("#example_id").data("ionRangeSlider");

$('#price_inner_1').bind('input', function(){
    var value = $(this).val();

    slider.update({
        from: value
    });
});
$('#price_inner_2').bind('input', function(){
    var value = $(this).val();

    slider.update({
        to: value
    });
});

// PRICE SLIDER 2

$("#example_id_2").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 30000,
    from: 10000,
    to: 20000,

    onChange: function (data) {
        var $range = $("#example_id_2");

        $range.on("change", function () {
            var $this = $(this),
                value = $this.prop("value").split(";");

            $('#price_inner_1').val(value[0]);
            $('#price_inner_2').val(value[1]);
        });
    }
});

var slider = $("#example_id_2").data("ionRangeSlider");

$('#price_inner_1').bind('input', function(){
    var value = $(this).val();

    slider.update({
        from: value
    });
});
$('#price_inner_2').bind('input', function(){
    var value = $(this).val();

    slider.update({
        to: value
    });
});

// HEIGHT SLIDEER

$("#height_filter").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 1000,
    from: 200,
    to: 800,

    onChange: function (data) {
        var $range = $("#height_filter");

        $range.on("change", function () {
            var $this = $(this),
                value = $this.prop("value").split(";");

            $('#height_inner_1').val(value[0]);
            $('#height_inner_2').val(value[1]);
        });
    }
});

var slider_1 = $("#height_filter").data("ionRangeSlider");

$('#height_inner_1').bind('input', function(){
    var value = $(this).val();

    slider_1.update({
        from: value
    });
});
$('#height_inner_2').bind('input', function(){
    var value = $(this).val();

    slider_1.update({
        to: value
    });
});

// WIDTH SLIDEER

$("#width_filter").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 1000,
    from: 200,
    to: 800,

    onChange: function (data) {
        var $range = $("#width_filter");

        $range.on("change", function () {
            var $this = $(this),
                value = $this.prop("value").split(";");

            $('#width_inner_1').val(value[0]);
            $('#width_inner_2').val(value[1]);
        });
    }
});

var slider_2 = $("#width_filter").data("ionRangeSlider");

$('#width_inner_1').bind('input', function(){
    var value = $(this).val();

    slider_2.update({
        from: value
    });
});
$('#width_inner_2').bind('input', function(){
    var value = $(this).val();

    slider_2.update({
        to: value
    });
});

// HEIGHT SLIDEER

$("#deep_filter").ionRangeSlider({
    type: "double",
    grid: true,
    min: 0,
    max: 1000,
    from: 200,
    to: 800,

    onChange: function (data) {
        var $range = $("#deep_filter");

        $range.on("change", function () {
            var $this = $(this),
                value = $this.prop("value").split(";");

            $('#deep_inner_1').val(value[0]);
            $('#deep_inner_2').val(value[1]);
        });
    }
});

var slider_3 = $("#deep_filter").data("ionRangeSlider");

$('#deep_inner_1').bind('input', function(){
    var value = $(this).val();

    slider_3.update({
        from: value
    });
});
$('#deep_inner_2').bind('input', function(){
    var value = $(this).val();

    slider_3.update({
        to: value
    });
});

// FANCY_BOX

$('.fancybox').fancybox({
    padding : 0,
    openEffect  : 'elastic',
    closeBtn: true
});

// RADIO_BUTTONS
$('.cab_radio').click(function () {
    $('.cab_radio').removeClass('active');
    $(this).addClass('active');
});


// PLUSO

(function() {
    if (window.pluso)if (typeof window.pluso.start == "function") return;
    if (window.ifpluso==undefined) { window.ifpluso = 1;
        var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
        s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
        s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
        var h=d[g]('body')[0];
        h.appendChild(s);
    }})();

$('#privateData').click(function () {
    $('.close_wind').fadeOut(0);
    $('.private_data').fadeIn(300);
});
$('#loginPass').click(function () {
    $('.close_wind').fadeOut(0);
    $('.login_and_pass').fadeIn(300);
});
$('#orderHist').click(function () {
    $('.close_wind').fadeOut(0);
    $('.orders_history').fadeIn(300);
});

$('#paymantProd').click(function () {
    $('.close_wind').fadeOut(0);
    $('.paymant_prod').fadeIn(300);
});
$('#deliveryProd').click(function () {
    $('.close_wind').fadeOut(0);
    $('.delivery_prod').fadeIn(300);
});
$('#returnProd').click(function () {
    $('.close_wind').fadeOut(0);
    $('.return_prod').fadeIn(300);
});

// jQuery(window).trigger('resize').trigger('scroll');

$('.filter_button').click(function () {
   $('.mobile_filter').slideToggle(100);
});

$('.navigate_block').click(function () {
    $('.navigate_block').removeClass('active');
    $(this).addClass('active');
});

$('#open_the_review').click(function () {
   $('.the_review').fadeToggle(300);
});