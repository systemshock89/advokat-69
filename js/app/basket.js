$(document).ready(function(){
    init();

    $("#id_oformlemie_zak").click(function(){
        $("#id_div_zakaz").toggle();
    });

    $("#id_send_zak").click(function(){
        var send = true;
        if($("#input_zakaz_fio").val() === ''){
            $(".form_div_zakaz_fio").addClass('error');
            send = false;
        }else{
            $(".form_div_zakaz_fio").removeClass('error');
        }
        if($("#input_zakaz_email").val() === ''){
            $(".form_div_zakaz_email").addClass('error');
            send = false;
        }else{
            $(".form_div_zakaz_email").removeClass('error');
        }
        if($("#input_zakaz_phone").val() === ''){
            $(".form_div_zakaz_phone").addClass('error');
            send = false;
        }else{
            $(".form_div_zakaz_phone").removeClass('error');
        }
        if(!send){
            return false;
            send = true;
        }
        $.ajax({
            url: "/ajax/basket/action.php",
            type: "POST",
            data: {'flag' : 'sendorder', 'data' : $("#id_form_zakaz").serializeArray()},
            success: function(html){
                window.location.href = "/cart/";
            },
            dataType: 'text'
        });
    });
});

function init()
{
    addToBasket();
    tovar_plus();
    delTovar();
    show_right_basket_on_click_by_rb();
}

function reInitBasket()
{
    $("#idBasket").load("/cart/ #idBasket", function(){
        init();
    });
}

function addToBasket()
{
    $(".button-to-cart").click(function(){
        showLoader();
        var tovar_id = $(this).data('tovar_id');
        $.ajax({
            url: "/ajax/basket/addToBasket.php",
            type: "POST",
            data: {'tovar_id' : tovar_id},
            success: function(html){
                //alert(html);
                change_summ_top_basket();
                show_right_basket();
                hideLoader();
            },
            dataType: 'text'
        });
    });
}

function tovar_plus()
{
    $(".tovar_plus").click(function(){
        showLoader();
        var tovar_id = $(this).data('tovar_id');
        var m = $(this).data('m');

        var tt_now = $("#id_tovar_"+tovar_id).val();
        if(m == "plus"){
            tt_now++;
        }else{
            tt_now--;
        }
        $("#id_tovar_"+tovar_id).val(tt_now);
        $.ajax({
            url: "/ajax/basket/action.php",
            type: "POST",
            data: {
                'flag' : 'plusminus',
                'tovar_id' : tovar_id,
                'm' : m
            },
            success: function(text){
                change_summ_top_basket();
                reInitBasket();
                hideLoader();
            },
            dataType: 'text'
        });
    });
}

function change_summ_top_basket()
{
    $.ajax({
        url: "/ajax/basket/action.php",
        type: "POST",
        data: {'flag' : 'change_summ_top' },
        success: function(text){
            $("#id_div_summ_top_basket").html(text + ' &#8381;');
        },
        dataType: 'text'
    });
}

function show_right_basket()
{
    $.ajax({
        url: "/ajax/basket/action.php",
        type: "POST",
        data: {'flag' : 'show_right' },
        success: function(text){
            $(".right-mini-cart.mini-cart .mini-cart-content").html(text);
            $('.right-mini-cart.mini-cart').addClass('show');
        },
        dataType: 'text'
    });
}

function show_right_basket_on_click_by_rb()
{
    $(".mini-cart-show-button").click(function(){
        show_right_basket();
    });
}

function delTovar()
{
    $(".del_tovar").click(function(){
        if(confirm("Вы действительно хотите удалить товар из корзины?")){
            var tovar_id = $(this).data('tovar_id');
            $.ajax({
                url: "/ajax/basket/action.php",
                type: "POST",
                data: {
                    'flag' : 'del',
                    'tovar_id' : tovar_id
                },
                success: function(text){
                    change_summ_top_basket();
                    reInitBasket();
                },
                dataType: 'text'
            });
        }
    });
    $(".delete-all").click(function(){
        if(confirm("Вы действительно хотите удалить все товары из корзины?")){
            $.ajax({
                url: "/ajax/basket/action.php",
                type: "POST",
                data: {
                    'flag' : 'del_all'
                },
                success: function(text){
                    change_summ_top_basket();
                    reInitBasket();
                },
                dataType: 'text'
            });
        }
    });
}