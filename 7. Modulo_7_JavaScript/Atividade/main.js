
const form = document.getElementById('form-comparador');
const mensagemSucesso = 'Campos validados com sucesso';
const mensagemErro = 'O <b>valor A</b> precisa ser menor que o <b>valor B</b>.';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = document.getElementById('campo-a');
    const valorB = document.getElementById('campo-b');

    if (valorB.value > valorA.value) {
        const pMensagemSucesso = document.querySelector('.mensagem-sucesso');
        pMensagemSucesso.innerHTML = (mensagemSucesso);        
        pMensagemSucesso.style.display = 'block';

        valorA.value = '';
        valorB.value = '';

    } else {
        const pMensagemErro = document.querySelector('.mensagem-erro');
        pMensagemErro.innerHTML = (mensagemErro);
        pMensagemErro.style.display = 'block';
    }
})