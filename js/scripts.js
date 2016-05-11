$('.video-player').click(function() {
    var player = $(this),
        url = player.attr('data-url'),
        img = player.children('img');
    if (url && !player.hasClass('playing')) {
        $('<iframe frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
            .attr('src', url)
            .attr('width', img.width())
            .attr('height', img.height())
            .appendTo(player);
        player.addClass('playing');
    }
});

$.ajaxChimp.translations['pt-BR'] = {
    'submit': 'Enviando...',
    0: 'Enviamos um email de confirmação para o seu email.',
    1: 'Por favor coloque um email valido.',
    2: 'O e-mail deve conter um único @',
    3: 'Parte final do email é inválido (a parte após o @: )',
    4: 'Parte inicial do email é inválido(a parte antes do @: )',
    5: 'Este endereço de email parece inválido. Insira um endereço de email real'
};

$("#newsletter-subscribe").ajaxChimp({
    language: 'pt-BR'
});


$(".accordion").each(function(){
    var $currentItem;

    $(this).on('click', '.line', function(e){
        if($currentItem && $currentItem.index() == $(e.currentTarget).index()){
            $currentItem.removeClass('open');
            $currentItem = null;
            return
        }

        if($currentItem) $currentItem.removeClass('open');
        $currentItem = $(e.currentTarget).addClass('open');
    });
});

$("[data-go-to]").on('click', function(e){
    var $elem = $(e.currentTarget),
        id = "#" + $elem.data("go-to");
    $('html,body').animate({ scrollTop: $(id).offset().top }, 800);
});