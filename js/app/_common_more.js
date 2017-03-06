/**
 * @description Дополнительные скрипты
 * version: 1.0.0
 */

$(function () {

    /* ЭЛЕМЕНТЫ КАТАЛОГА */
    if ($('.catalog .catalog-container .item').length > 0) {

        var curPositionTop = $('.catalog .catalog-container > .item').eq(0).position().top, //берем позицию первого эл-та
            elementsInRow = []; //массив, в кот-й помещаем элементы, находящиеся на одной строке

        $('.catalog .catalog-container').each(function () {

            var catalog = $(this),
                catalog_item_height = 0;

            catalog.find('.item').each(function () {

                /* Картинка по дефолту */
                var cur_img = $(this).find('.img-container img').attr('src');
                if (cur_img == "")
                    $(this).find('.img-container img').attr({'src': '/img/empty_icon.png'});
                /* /Картинка по дефолту */


                /* Выравнивание высоты*/
                //если эл-ты находятся на одной строке
                if ($(this).position().top != curPositionTop) {

                    curPositionTop = $(this).position().top;

                    for (var k in elementsInRow) {
                        elementsInRow[k].height(catalog_item_height);
                    }

                    catalog_item_height = $(this).height();

                    elementsInRow = [];

                }

                elementsInRow.push($(this));

                var cur_height = $(this).height();
                if (cur_height > catalog_item_height)
                    catalog_item_height = cur_height;

                /* Выравнивание высоты*/
            });

            //для последней строки элементов, если она не полная, повторяем
            for (var k in elementsInRow) {
                elementsInRow[k].height(catalog_item_height);
            }
            elementsInRow = [];
        });

    }
    /* /ЭЛЕМЕНТЫ КАТАЛОГА */


    /* Переносим правый блок вправо */
    $('.floatblock.center-min, .floatblock.center-middle').before($('.floatblock.right').show());
    $('.padding-right').hide();
    /* /Переносим правый блок вправо */


    /* Стартуем слайдеры */
    if ($(".standart_slider").is(".index_slider2")) {
        $.getScript('js/lib/jquery.standart.slider.js', function () {

            $('.index_slider2').standart_slider({
                timeout: 12000,
                time: 400,
                timer: 1, /* Включение-выключение перелистывания */
                size: 1, /* Количество отображаемых обьектов в окне показов */
                type: 'scroll_horiz'
            });

        });
    }
    if ($(".standart_slider").is(".tovar_slider2")) {
        $.getScript('js/lib/jquery.standart.slider.js', function () {

            $('.tovar_slider2').standart_slider({
                timeout: 12000,
                time: 400,
                timer: 1, /* Включение-выключение перелистывания */
                size: 1, /* Количество отображаемых обьектов в окне показов */
                type: 'scroll_horiz'
            });

        });
    }
    /* /Стартуем слайдеры */


    /* uniform */
    if ($('input[type=checkbox]')) { //checkbox
        $('head').append("<link rel='stylesheet' type='text/css'  href='css/uniform.default.min.css'/>");
        $('head').append("<link rel='stylesheet' type='text/css'  href='css/_uniform.checkbox.css'/>"); //стили checkbox
        $.getScript('js/lib/jquery.uniform.min.js', function () {

            $('input[type=checkbox]').uniform();

        });
    }
    if ($('input[type=radio]')) { //radio
//        $('head').append("<link rel='stylesheet' type='text/css'  href='/css/uniform.default.min.css'/>");
        $('head').append("<link rel='stylesheet' type='text/css'  href='css/_uniform.radio.css'/>"); //стили radio
        $.getScript('js/lib/jquery.uniform.min.js', function () {

            $('input[type=radio]').uniform();

        });
    }
    if ($('select').is('.uniform')) { //select
//        $('head').append("<link rel='stylesheet' type='text/css'  href='/css/uniform.default.min.css'/>");
        $('head').append("<link rel='stylesheet' type='text/css'  href='css/uniform.select.css'/>"); //стили select
        $.getScript('js/lib/jquery.uniform.min.js', function () {

            $('select.uniform').uniform();

        });
    }
    /* /uniform */


    /* selectik */
    if ($('select').is('.selectik')) {
        $('head').append("<link rel='stylesheet' type='text/css'  href='css/selectik.css'/>");
        $.getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js', function () {
            $.getScript('js/lib/jquery.selectik.min.js', function () {

                $('select.selectik').selectik({maxItems: 8, minScrollHeight: 20});

            });

        });
    }
    /* /selectik */


    /* Slider-range с возможностью вводить значения */
    if ($('div').is('.slider-range')) {
        $('head').append("<link rel='stylesheet' type='text/css'  href='css/jquery-ui.css'/>");
        $.getScript('js/lib/jquery-ui.min.js', function () {


            $(".slider-range-container").each(function () {

                var $this = $(this),
                    $slider_range,
                    $slider_range_input1 = $this.find('input.input1'),
                    $slider_range_input2 = $this.find('input.input2'),
                    $slider_range_min = parseInt($slider_range_input1.val()), // минимальное возможное значение у бегунка (указывается в инпуте 1)
                    $slider_range_max = parseInt($slider_range_input2.val()), // максимальное возможное значение у бегунка (указывается в инпуте 2)
                    $slider_range_default_min = parseInt($this.data("slider-range-default-min")), // ДЕФОЛТНОЕ минимальное возможное значение у бегунка (если необходимо)
                    $slider_range_default_max = parseInt($this.data("slider-range-default-max")), // ДЕФОЛТНОЕ максимальное возможное значение у бегунка (если необходимо)
                    $slider_range_step = parseInt($this.data("slider-range-step")), // шаг бегунка


                    $slider_range = $this.find('.slider-range').slider({
                        range: true,
                        min: ( $slider_range_default_min >= 0 ? $slider_range_default_min : $slider_range_min ),
                        max: ( $slider_range_default_max >= 0 ? $slider_range_default_max : $slider_range_max ),
                        values: [
                            $slider_range_min,
                            $slider_range_max

                        ],
                        step: ( $slider_range_step ? $slider_range_step : 1 ),
                        slide: function (event, ui) { // cобытие происходит на каждое движении мыши, при перетаскивании рукоятки ползунка

                            stepRange(parseInt(ui.values[0]), parseInt(ui.values[1]), ( $slider_range_default_max >= 0 ? $slider_range_default_max : $slider_range_max ));
                        },
                        stop: function (event, ui) { // событие происходит в момент завершения перетаскивания рукоятки ползунка.

                            stepRange(parseInt(ui.values[0]), parseInt(ui.values[1]), ( $slider_range_default_max >= 0 ? $slider_range_default_max : $slider_range_max ));

                        }
                    });

                // при вводе значений в инпуты перемещть бегунок
                $this.find('input.input1, input.input2').bind('keyup mouseup', function () {

                    $slider_range.slider({
                        values: [
                            $this.find('input.input1').val(),
                            $this.find('input.input2').val()
                        ]
                    });

                });

                // ф-я записывает числовые значения бегунков в инпуты и формирует минимальное расстояние бегунков друг от друга
                function stepRange(val1, val2, max) {

                    var stepRangeVal = Math.max(Math.round(max * 0.05), 1); //вычисление минимального расстояния, которое остается между бегунками

                    if (val2 - val1 < stepRangeVal) {
                        val2 = Math.min(val1 + stepRangeVal, max);
                        val1 = val2 - stepRangeVal;
                    }

                    // записываются значения бегунков в input-ы цены "от ... до"
                    $slider_range_input1.val(val1);
                    $slider_range_input2.val(val2);
                    $slider_range.slider({values: [val1, val2]});
                }

            });

        });
    }
    /* /Slider-range с возможностью вводить значения */


    /* scrollbar */
    if ($('div').is('.content-with-scroll')) {
        $('head').append("<link rel='stylesheet' type='text/css'  href='css/jquery.scrollbar.css'/>");
        $.getScript('js/lib/jquery.scrollbar.min.js', function () {

            $('.content-with-scroll').scrollbar();

        });
    }
    /* /scrollbar */


    /* Свернуть/развернуть Фильтр слева */
    $('.filter .item-block .see-all').click(function (e) {
        e.preventDefault();

        $(this).closest('.item-block').find('.item-container').slideToggle(function() {
            $(this).closest('.item-block').toggleClass('selected');
        });
    });
    /* /Свернуть/развернуть Фильтр слева */


    /* развернуть список услуг */
    $('.uslugi .item .button.more').click(function (e) {
        e.preventDefault();

        var block = $(this).parent().find('.text-container'),
            heightBlockFull = block.find('.text').height(),
            btnTextOpened = 'Свернуть';

        if (typeof heightBlock == 'undefined') {
            heightBlock = block.height();
        }

        if (typeof btnTextClosed == 'undefined') {
            btnTextClosed = $(this).html();
        }

        if ($(this).hasClass('opened')) {

            block.animate({
                height: heightBlock
            }, 500);
            $(this).removeClass('opened');
            $(this).html(btnTextClosed);

        } else {

            block.animate({
                height: heightBlockFull
            }, 500);
            $(this).addClass('opened');
            $(this).html(btnTextOpened);
        }
    });
    /* развернуть список услуг */


    /* jquery.form*/
    if ($(".open-popup").is('div')) {
        $.getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery.form/3.51/jquery.form.min.js', function () {
        });
    }
    /* jquery.form*/


}); // END READY


/* кастомный input file */
/**
 * Кастомный инпут - клик
 */
function customInputFile(obj) {
    obj.click();
}

/**
 * Вставляет название файла в кастомный инпут
 * @param obj
 */
function setInputFileName(obj) {
    if (obj.val() !== '') {
        obj.parent().find('.file-name').html('<img class="clear-input-file" src="img/temp/close.png" onclick="clearInputFile($(this))" alt=""/>')
            .css('display', 'inline-block')
            .append(obj.val().replace(/.*[\\\/](.*)/, "$1"))
            .parent().parent().find('.validation-informer').hide();
    } else {
        obj.parent().find('.file-name').html('');
    }
}

/**
 * Очистка поля файл
 * @param obj
 */
function clearInputFile(obj) {
    obj.parent().html('').hide()
        .parent().parent().find('input[type=file]').val('')
}
/* /кастомный input file */


//Баг в ie с прыгающим рывками элементом с position: fixed
if (navigator.userAgent.match(/Trident.*rv[ :]*11\.| Edge\/12\./) || navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/MSIE 9/i)) {
    $('body').on("mousewheel", function (e) {
        e.preventDefault();

        var wheelDelta = event.wheelDelta;

        var currentScrollPosition = window.pageYOffset;
        window.scrollTo(0, currentScrollPosition - wheelDelta);
    });
}


/* Выравнивание элементов по одинаковой высоте */
(function ($) {
    $.fn.equalHeights = function () {
        var $items = $(this);
        function equalize() {
            $items.height('initial');
            var maxH = $items.eq(0).height();
            $items.each(function () {
                maxH = ($(this).height() > maxH) ? $(this).height() : maxH;
            });
            $items.height(maxH);
        }
        equalize();
        $(window).bind('resize', function () {
            equalize();
        });
    };
})(jQuery);
/* Выравнивание элементов по одинаковой высоте */


//preloader
$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(400).fadeOut('slow');
});

