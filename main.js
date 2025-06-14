$(document).ready(function(){
    $('header button').click(function(){                                            //forma de chamar o elemento com JQuery
        $('form').slideDown()                                                       //para o efeito de aparecer menu escondido
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp()                                                          //para o efeito de esconder o menu
    })

    $('form').on('submit', function(e){                                             // forma resumida de chamar o elemento usando JQuery
        e.preventDefault()                                                         //Esse evento faz com que o site não tenha efeito de atualizar
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val()            //Const Para recuperar o endereço que é inserido no campo.
        const novoItem = $('<li style="display: none"></li>')        //Const que ira enviar o conteudo para o li, o style é para ocultar a foto e receber o efeito de fade
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem)
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                Ver a imagem em tamanho real
                </a>
            </div>
            `).appendTo(novoItem)
            $(novoItem).appendTo('ul')
            $(novoItem).fadeIn(1000)                          //efeito de transição / o valor é em milésimo de segundo
            $('#endereco-imagem-nova').val('')               //Para zerar o input depois de usado
            
    })
})