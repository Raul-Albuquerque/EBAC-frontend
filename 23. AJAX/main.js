/*
document.addEventListener('DOMContentLoaded', function() { //evento para capturar o carregamento do DOM

    document.getElementById('btn-buscar-cep').addEventListener('click', function() {  //evento para capturar o click no botão

        const xhttp = new XMLHttpRequest(); //funcionamento do AJAX
        const cep = document.getElementById('cep').value; //receber o valor digitado no CEP
        const endPoint = `https://viacep.com.br/ws/${cep}/json`; 

        xhttp.open('GET', endPoint);
        xhttp.send();

    })
})
*/

/*
$(document).ready(function() {  //evento para capturar o carregamento do DOM
    $('#cep').mask('00000-000');  //adiciona uma máscara ao elemento

    $('#btn-buscar-cep').click(function() {  //evento para capturar o click no botão

        const cep = $('#cep').val();  //receber o valor digitado no CEP
        const endPoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);  //selecionar o botao
        $(this).find('i').addClass('d-none');  //procura se existe a tag i e aciona a class d-none
        $(this).find('span').removeClass('d-none'); //procura pelo span e remove a class d-none

        $.ajax(endPoint).done(function(resposta) {
            
            const logradouro = resposta.logradouro; //captura o nome do logradouro do JSON
            const bairro = resposta.bairro; //captura o nome do bairro do JSON
            const cidade = resposta.localidade; //captura o nome da cidade do JSON
            const estado = resposta.uf; //captura o nome do estado do JSON
            const endereco = `${logradouro}, ${bairro}, ${cidade}, ${estado}`; //monta o endereço completo

            $('#endereco').val(endereco); //substituir o valor do campo pelo endereço completo

            $(botao).find('i').removeClass('d-none'); //procura pelo i e remove a class d-none
            $(botao).find('span').addClass('d-none'); //procura pelo span e remove a class d-none
        })
    })
})
*/

$(document).ready(function() {
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(function() {

        const cep = $('#cep').val();
        const endPoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');


        fetch(endPoint)
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(json) {
            
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            const endereco = `${logradouro}, ${bairro}, ${cidade}, ${estado}`;

            $('#endereco').val(endereco);
            $(botao).find('span').addClass('d-none');
            $(botao).find('i').removeClass('d-none');
        })
    })
})