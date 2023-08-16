$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeDaTarefa = $('#nome-tarefa').val();
        const novaTarefa = $(`<li>${nomeDaTarefa}</li>`).appendTo('ul');

        $('#nome-tarefa').val('');

        $(novaTarefa).on('click', function() {
            $('li').addClass('atividade-concluida');
        })        
    })
})