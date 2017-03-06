/**
 * @description Основные скрипты
 * version: 1.0.3
 */

$(function () {


    /* Картинка для элемента по дефолту */
    $(".row .item").each(function () {
        var cur_img = $(this).find('img').attr('src');
        if (cur_img == "")
            $(this).find('img').attr({'src': 'img/empty_icon.png'});
    });
    /* /Картинка для элемента по дефолту */


    // задаем одинаковую высоту для элементов
    $(".catalog-products .item .img-container").matchHeight();
    $(".catalog-products .item .price-container").matchHeight();
    $(".catalog-products .item .name").matchHeight();
    $(".catalog-gallery .item .img-container").matchHeight();
    $(".catalog-gallery .item .name").matchHeight();
    $(".catalog-sections .item .img-container").matchHeight();
    $(".catalog-sections .item .name").matchHeight();
    // /задаем одинаковую высоту для элементов


    /* Стартуем стандартную ajax обработку */
    $('form.standart_load,a.standart_load').standart_load();
    /* /Стартуем стандартную ajax обработку */


    /* Адаптивное верхнее меню */
    try {
        $('.menu-top').eq(0).slicknav({
            label: '',
            prependTo: '.header-mobile',
            closeOnClick:true,
            allowParentLinks: true
        });

        var window_height = $(window).height(),
            header_mobile_height = $('.header-mobile').height();
        $('.slicknav_nav').css({'max-height': window_height - header_mobile_height, 'overflow-y':'scroll'}); //для верт. скролла очень длинных меню

    } catch (err) {

    }
    /* /Адаптивное верхнее меню */


    // Функционал кнопок в мобильном меню - раскрывающих элементы
    $(".header-mobile-button").each(function (index) {
        var this_btn = $(this);

        this_btn.click(function (e) {

            header_mobile_button_func(index);
            slicknav_btn_func();

            // если кнопка раскрывает какое-лиюо меню
            if (this_btn.data('buttonName')) {
                e.preventDefault();
                this_btn.toggleClass('active');

                $('.header-mobile-button-container').each(function () {
                    if (this_btn.data('buttonName') === $(this).data('buttonName')) {
                        $(this).slideToggle(200);
                    }
                });

            }
        });
    });

    //при клике на мобильное меню закрывать все остальные пункты, если они открыты
    $('.slicknav_btn').click(function () {
        header_mobile_button_func();
    });

    //проверка, не нажата ли другая мобильная кнопка
    function header_mobile_button_func(index) {

        $(".header-mobile-button").each(function( index_func ) {
            var this_btn_func = $(this);

            if( index_func!=index){
                if( this_btn_func.hasClass('active')){

                    this_btn_func.removeClass('active');

                    $('.header-mobile-button-container').each(function() {
                        if( this_btn_func.data('buttonName') === $(this).data('buttonName') ){

                            $(this).slideToggle(200);

                        }
                    });
                }
            }
        });

    }
    //проверка, не открыто ли мобильное меню
    function slicknav_btn_func() {
        if( $(".slicknav_btn").hasClass('slicknav_open')){
            $('.menu-top').slicknav('close');
        }
    }
    // //Функционал кнопок в мобильном меню - раскрывающих элементы


    // Отменить перетаскивание картинок и ссылок
    $("img, a").on("dragstart", function (event) {
        event.preventDefault();
    });


    /* Index Owl Slider */
    $(function() {
        if( $(".index_slider .owl-carousel").is("div") ){

            var owl =  $('.index_slider .owl-carousel');

            owl.owlCarousel({
                items: 1,
                loop: true,
                margin: 15,
                autoplay: true,
                autoplayTimeout: 12000,
                autoplayHoverPause: true,
                lazyLoad:true,
                nav: true,
                navText:  [
                    "",
                    ""
                ],
                // эффект FadeUp
                animateOut: 'owl-fadeUp-out',
                animateIn: 'owl-fadeUp-in',
                responsiveBaseElement: $('#overflow_div, #fullpage'),
                responsive:{
                    0:{
                        nav: false
                    },
                    768:{
                        nav: true
                    }
                }
            });

            owl.find('.owl-nav .owl-prev').attr('title', 'Предыдущий');
            owl.find('.owl-nav .owl-next').attr('title', 'Следующий');
        }
    });
    /* /Index Owl Slider */


    /* Basic Owl Slider */
    $(function() {
        if( $(".basic-slider .owl-carousel").is("div") ){

            var owl =  $('.basic-slider .owl-carousel');

            owl.owlCarousel({
                items: 1,
                loop: true,
                margin: 15,
                autoplay: true,
                autoplayTimeout: 12000,
                autoplayHoverPause: true,
                lazyLoad:true,
                navText:  [
                    "",
                    ""
                ],
                // эффект FadeUp
                animateOut: 'owl-fadeUp-out',
                animateIn: 'owl-fadeUp-in',
                responsiveBaseElement: $('#overflow_div, #fullpage'),
                responsive:{
                    0:{
                        nav: false
                    },
                    768:{
                        nav: true
                    }
                }
            });

            owl.find('.owl-nav .owl-prev').attr('title', 'Предыдущий');
            owl.find('.owl-nav .owl-next').attr('title', 'Следующий');
        }
    });
    /* /Basic Owl Slider */


    /* /Carousel Owl Slider */
    $(function () {
        if ($(".carousel_slider .owl-carousel").is("div")) {

            var owl = $('.carousel_slider .owl-carousel');

            owl.owlCarousel({
                autoplay: true,
                autoplayTimeout: 12000,
                autoplayHoverPause: true,
                lazyLoad:true,
                navText:  [
                    "",
                    ""
                ],
                dots: false,
                responsiveBaseElement: $('#overflow_div, #fullpage'),
                responsive:{
                    0:{
                        items:1,
                        margin: 15,
                        nav: false,
                        dots: true,
                        stagePadding: 35,
                        loop: true
                    },
                    576:{
                        items: 2,
                        margin: 30,
                        nav: true,
                        rewind:true,
                        dots: true
                    },
                    768:{
                        items: 3,
                        margin: 30,
                        nav: true,
                        rewind:true
                    },
                    992:{
                        items: 4,
                        margin: 30,
                        nav: true,
                        rewind:true
                    }

                }
            });

            owl.find('.owl-nav .owl-prev').attr('title', 'Предыдущий');
            owl.find('.owl-nav .owl-next').attr('title', 'Следующий');

            // прокрутка колесом мыши
            // owl.on('mousewheel', '.owl-stage', function (e) {
            //     if (e.deltaY>0) {
            //         owl.trigger('prev.owl');
            //     } else {
            //         owl.trigger('next.owl');
            //     }
            //     e.preventDefault();
            // });
        }
    });
    /* /Carousel Owl Slider */


    /* SYNCED Owl Slider */
    if ($(".synced_slider1 .owl-carousel").is("div")) {

        var owl = $('.synced_slider1 .owl-carousel');
        var owl2 = $('.synced_slider2 .owl-carousel');

        owl.owlCarousel({
            items: 1,
            autoplay: true,
            autoplayTimeout: 12000,
            autoplayHoverPause: true,
            rewind:true,
            lazyLoad: true,
            navText:  [
                "",
                ""
            ],
            dots: false,
            responsiveBaseElement: $('#overflow_div, #fullpage'),
            responsive:{
                0:{
                    margin: 15,
                    nav: false,
                    dots: true,
                    stagePadding: 35
                },
                576:{
                    margin: 30,
                    nav: true,
                    dots: true
                },
                768:{
                    margin: 30,
                    nav: true
                },
                992:{
                    margin: 30,
                    nav: true
                }

            }
        }).on('changed.owl.carousel', function (event) {
            owl2.trigger('to.owl.carousel', [event.item.index, 300, true]);
            // (Optional) Remove .current class from all items
            owl2.find('.current').removeClass('current');
            // (Optional) Add .current class to current active item
            owl2.find('.owl-item .item').eq(event.item.index).addClass('current');
        });

        owl2.owlCarousel({
            dots: false,
            margin: 10,
            items: 3,
            lazyLoad: true,
            responsiveBaseElement: $('#overflow_div, #fullpage')
        })
            .on('click', '.owl-item', function (event) {
                owl.trigger('to.owl.carousel', [$(event.target).parents('.owl-item').index(), [300], true]);
            });

        owl2.find('.owl-item').first().find('.item').addClass('current');
    }
    /* /SYNCED Owl Slider */


    /* placeholder */
    if ($('input').attr('placeholder') || $('textarea').attr('placeholder')) {
        $.getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-placeholder/2.3.1/jquery.placeholder.min.js', function () {

            $('input[placeholder], textarea[placeholder]').placeholder();

        });
    }
    /* /placeholder */


    /* fancybox для картинок в контенте */
    // adds .naturalWidth() and .naturalHeight() methods to jQuery
    // for retreaving a normalized naturalWidth and naturalHeight.
    (function($){
        var
            props = ['Width', 'Height'],
            prop;

        while (prop = props.pop()) {
            (function (natural, prop) {
                $.fn[natural] = (natural in new Image()) ?
                    function () {
                        return this[0][natural];
                    } :
                    function () {
                        var
                            node = this[0],
                            img,
                            value;

                        if (node.tagName.toLowerCase() === 'img') {
                            img = new Image();
                            img.src = node.src,
                                value = img[prop];
                        }
                        return value;
                    };
            }('natural' + prop, prop.toLowerCase()));
        }
    }(jQuery));

    $('.content-wrapper .container p img').each(function(){
        if(
            //$(this).attr('style').indexOf('width:') != -1 &&
        $(this).attr('style').indexOf('max-width:') == -1 &&
        !$(this).attr('class') &&
        ( $(this).width() <  $(this).naturalWidth() || $(this).height() <  $(this).naturalHeight() ) //если размер натуральной картинки больше чем показываемой картинки
        ){
            // Формируем фансибокс ссылку
            var $a_elem = $("<a href='" + $(this).attr('src') + "' data-fancybox data-caption='" + $(this).attr('alt') + "' style='" + $(this).attr('style') + ";display: block;'  class='img-container'></a>");
            // добавляем к ней код текущего элемента
            $(this).css('margin',0);
            $a_elem.append($(this).clone());
            // Производим подмену с текущим элементом

            $(this).replaceWith($a_elem);
        }
    });
    /* /fancybox для картинок в контенте */


    /* fancybox3 */
    try {
        var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth; //ширина скроллбара

        $("[data-fancybox]").fancybox({
            // кнопка скачивания изображений
            // onInit : function( instance ) {
            //     instance.$refs.downloadButton = $('<a class="fancybox-button fancybox-download" download></a>')
            //         .appendTo( instance.$refs.buttons );
            // },
            // beforeMove: function( instance, current ) {
            //     instance.$refs.downloadButton.attr('href', current.src);
            // }
            // двигаем виджет телефона и кнопку корзины на ширину скроллбара, чтоб не прыгали
            onInit : function() {
                $('.mini-cart, .widget-phone').css('marginRight',scrollbarWidth);
            },
            afterClose: function() {
                $('.mini-cart, .widget-phone').css('marginRight',0);
            },
        });

        /* Открываем автоматом по id через класс */
        var fancybox_start_id = window.location.href.indexOf("#");
        if (fancybox_start_id > 0) {
            var fancybox_id = window.location.href.substring(fancybox_start_id + 1);

            $("[data-fancybox]").each(function() {
                if( $(this).attr('data-fancybox-id') == fancybox_id){
                    $(this).click();
                }
            });
        }

    } catch (err) {
    }
    /* /fancybox3 */


    /* Табы */
    $('.tabs-controls > .item').on('click', function (e) {
        e.preventDefault();

        var item = $(this),
            contentItem = $(this).parent().parent().find('.tabs-list > .item'),
            itemPosition = item.index();

        contentItem.eq(itemPosition)
            .add(item)
            .addClass('active')
            .siblings()
            .removeClass('active');
    });
    /* /Табы */


    /* Кнопки - виджеты */
    var contentBlock = $('.content-wrapper .container').first(), // блок с контентом сайта
        documentWidth,
        contentBlockWidth,
        contentOffsetLeft;

    /* кнопка Наверх */
    toTopButton();
    function toTopButton() {
        $('body').append('<div class="toTop" title="Наверх"></div>');

        var toTop = $('.toTop'),
            toTopOffset = 30, // отступ кнопки от контента в px (при большом экране)
            toTopOffsetSmallScreen = 15, // отступ кнопки от левого края в px (при малом экране)
            toTopWidth = toTop.width();

        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                toTop.stop().fadeIn();
            } else {
                toTop.stop().fadeOut();
            }
        });

        toTop.click(function () {
            $('body,html').animate({scrollTop: 0}, 500);

        })
            .hover(
                function () {
                    $(this).stop().animate({
                        opacity: 1
                    }, 250);
                }, function () {
                    $(this).stop().animate({
                        opacity: 0.3
                    }, 250);
                }
            );


        //определение позиции кнопки "Наверх"
        if (contentBlock.length > 0) { // если указанный блок с контентом существует
            toTopPosition();

            $(window).resize(function () {
                toTopPosition();
            });
        }
        function toTopPosition() {
            documentWidth = $(document).width();
            contentBlockWidth = contentBlock.width();

            contentOffsetLeft = (documentWidth - contentBlockWidth) / 2;

            if (documentWidth <= (contentBlockWidth + (toTopOffset + toTopWidth + toTopOffsetSmallScreen) * 2 ) ) {
                // когда ширина окна браузера меньше чем ширина контента + ширина кнопки Назад
                toTop.css('left', toTopOffsetSmallScreen);
            } else {
                // когда ширина окна браузера больше чем ширина контента + ширина кнопки Назад
                toTop.css('left', contentOffsetLeft - toTopWidth - toTopOffset);
            }
        }
    }
    /* /кнопка Наверх */

    /* кнопка Мини-корзина */
    miniCartButton();
    function miniCartButton() {

        var miniCart = $('.mini-cart'),
            miniCartOffset = 36, // отступ кнопки от контента в px (при большом экране)
            miniCartOffsetSmallScreen = 45, // отступ кнопки от правого края в px (при малом экране)
            miniCartWidth = miniCart.width();

        $(window).scroll(function () {
            cartVerticalPosition();
        });

        //определение позиции кнопки "Мини-корзина"
        if (contentBlock.length > 0) { // если указанный блок с контентом существует
            toTopPosition();

            $(window).resize(function () {
                toTopPosition();
            });
        }
        function toTopPosition() {
            documentWidth = $(document).width();
            contentBlockWidth = contentBlock.width();

            contentOffsetLeft = (documentWidth - contentBlockWidth) / 2;

            //позиционирование мини корзины по горизонтали
            if (documentWidth <= (contentBlockWidth + (miniCartOffset + miniCartWidth + miniCartOffsetSmallScreen) * 2 )) {
                $('.mini-cart').css('right', miniCartOffsetSmallScreen);
            } else{
                $('.mini-cart').css('right', contentOffsetLeft - miniCartWidth - miniCartOffset);
            }

        }

        //позиционирование мини корзины по вертикали
        function cartVerticalPosition(){

            if ($(window).scrollTop() > 149){
                $('.mini-cart').addClass('fixed');
            } else{
                $('.mini-cart').removeClass('fixed');
            }
        }
        cartVerticalPosition();
    }
    /* /кнопка Мини-корзина */
    /* Кнопки - виджеты */


    /* WIDGET PHONE */
    if ($('.widget-phone').length > 0) {
        $('.widget-phone').standart_widgetPhone({
            // widgetTimer: 0, // таймер ,по истечении которого появится виджет
            //contentBlock: $('#overflow_div'), // блок с контентом сайта (для позиционирования виджета)
        });
    }
    /* /WIDGET PHONE */


    /* FAQ MINI */
    $('.faq-mini .item').click(function(e) {

        var faq_mini_item_this = $(this);
        e.preventDefault();

        if ( !faq_mini_item_this.hasClass('selected') ){
            faq_mini_item_this.find('.answer').slideToggle();
            faq_mini_item_this.toggleClass('selected');
        } else {
            faq_mini_item_this.find('.answer').slideUp(function() {
                faq_mini_item_this.toggleClass('selected');
            });
        }
    });
    /* /FAQ MINI */


    // Маска для удобного ввода телефона
    phone_input_mask();


}); // END READY


var Load = function (url, param) { // Функция для стандартизации общения с сервером
    $.post(
        url,
        param,
        function (data) {
            var sc_ = '';
            if (data['script']) {
                sc_ = data['script'];
                delete data['script'];
            }
            for (i in data) {
                $(i).html(data[i]);
            }
            eval(sc_);
        },
        'json'
    );
};


var Message = function (message) { // Всплывающее сообщение на базе наработки standart_window

    $('.window.message').remove();
    /* Удалилил старое окно */
    /* Добавлеяем новое окно */
    $('body').append(
        '<div class="window message">' +
        '<div class="window-popup-overflower"></div>' +
        '    <div class="window_body">' +
        '        <div class="close">x</div>' +
        '        <div class="content">' +
        '            <div class="block">' +
        message +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>');

    $('.window.message').standart_window();
};


//Скрипт добавления ссылки на источник при копировании
function addLink() {
    //Get the selected text and append the extra info
    var selection = window.getSelection(),
        pagelink = '<br /><br /> Подробнее: ' + document.location.href,
        copytext = selection + pagelink,
        newdiv = document.createElement('div');

    //hide the newly created container
    newdiv.style.position = 'absolute';
    newdiv.style.left = '-99999px';

    //insert the container, fill it with the extended text, and define the new selection
    document.body.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);

    window.setTimeout(function () {
        document.body.removeChild(newdiv);
    }, 100);
}
document.addEventListener('copy', addLink);


//preloader
function showLoader() {
    $("#preloader").show();
}

function hideLoader() {
    $("#preloader").hide();
}


// Маска для удобного ввода телефона
function phone_input_mask() {
    try {
        $('.item-form-element.phone input[type=tel]').inputmask("+7 ( 999 ) 999 - 99 - 99");
    } catch (err) {
    }
}