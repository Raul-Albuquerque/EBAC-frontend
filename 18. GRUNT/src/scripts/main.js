document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();

        //Math.ceil(numero) -> arredonda sempre para cima
        //Math.floor(numero) -> arredonda para baixo
        //Math.round(numero) -> arredonda corretamente 

        let numeroMaximo = parseInt(document.getElementById('numero-maximo').value);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);
        
        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})