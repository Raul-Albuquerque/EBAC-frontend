console.log ("Olá, mundo.")

const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formValido = false; 

function validaNome(nomeCompleto) {
    const arrayNome = nomeCompleto.split(' ');

    return arrayNome.length >= 2;
}

form.addEventListener('submit', function(e) {

    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDepositado = document.getElementById('valor-deposito');
    const mensagemSucesso = `O valor de: <b>${valorDepositado.value}</b> foi depositado para <b>${nomeBeneficiario.value}</b> - conta nº: <b>${numeroContaBeneficiario.value}</b>.`;

    formValido = validaNome(nomeBeneficiario.value);

    if (formValido) {
        const containerMensagemSucesso = document.querySelector('.mensagem-sucesso');
        containerMensagemSucesso.innerHTML = (mensagemSucesso);
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDepositado.value = '';

    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.mensagem-erro').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formValido = validaNome(e.target.value);

    if (!formValido) {
        nomeBeneficiario.classList.add('error');
        document.querySelector('.mensagem-erro').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.mensagem-erro').style.display = 'none';
    }
});
