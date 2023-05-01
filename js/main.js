$(document).ready(function(){
    $("#telefone").mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });
    $("#CPF").mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    });
    $("#CEP").mask('00000-000', {
        placeholder: '_____-___'
    });
    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email: true
            },
            telefone:{
                required:true
            },
            CPF:{
                required:true
            }
        },
        messages:{
            nome: 'Por favor, insira o seu nome completo.',
            email: 'E-mail inválido.',
            telefone: 'Por favor, insira um número de telefone',
            CPF: 'Você não informou o CPF'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let campInvalido = validador.numberOfInvalids();
            if(campInvalido){
                alert(`Você não preencheu corretamente, verifique pois temos ${campInvalido} campos inválidos`)
            }
        }
    })
});