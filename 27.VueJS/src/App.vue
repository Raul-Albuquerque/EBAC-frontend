<script setup>
import { reactive } from 'vue';

  const nome = "Raul";

  const meuObj = {
    nome: "Raul",
    filmeFavorito: "Interestrelar"
  }

  function dizOla(nome) {
    return `${nome} diz oi.`;
  }

  const enderecoDaImagem = "https://t.ctcdn.com.br/4r1WDGP6W0qYOG8jnPzfzX_OhSM=/1024x576/smart/i567736.jpeg";
  const enderecoDaImagemSuperman = "https://t.ctcdn.com.br/sS0dqwq3BA9nGFigIH26q8YHOgI=/640x360/smart/i677638.jpeg";
  const botaoEstaDesabilitado = true;
  const gostaDoBatman = false;
  const gostaDoSuperman = false;

  //let contador = 0;

  const estado = reactive({
    contador: 0,
    saldo: 5000,
    transferindo: 0,
    nomes: ["Raul", "Gian", "Luiza", "Mônica"],
    nomeAInserir: "",
  }) 
    

  function incrementar() {
    estado.contador ++;
  }

  function decrementar() {
    estado.contador --;
  }

  function alteraEmail(evento) {
    estado.email = evento.target.value;
  }

  function mostraSaldoFuturo() {
    const {saldo, transferindo} = estado;
    return saldo - transferindo;
  }

  function validaValorTransferencia () {
    const {saldo, transferindo} = estado;
    return saldo >= transferindo;
  }

  function cadastraNome() {
    if(estado.nomeAInserir.length >= 3) {
      estado.nomes.push(estado.nomeAInserir);
    } else {
      alert("Digite mais caracteres");
    }
  }
    
</script>

<template>
  <h1>{{ dizOla("João") }}</h1>
  <img v-if="gostaDoBatman" :src="enderecoDaImagem" >
  <img v-else-if="gostaDoSuperman" :src="enderecoDaImagemSuperman" >
  <h2 v-else>Não curte heróis da DC</h2>
  <button :disabled="botaoEstaDesabilitado">Enviar mensagem</button>
  <br>
  <hr>
  {{ estado.contador }}
  <button @click="incrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>
  <br>
  <hr>

  {{ estado.email }}
  <input type="email" @keyup="alteraEmail">

  <br>
  <hr>

  Saldo: {{ estado.saldo }} <br>
  Transferindo: {{ estado.transferindo }} <br>
  Saldo depois da transferência: {{ mostraSaldoFuturo() }} <br>
  <input :class="{ invalido: !validaValorTransferencia() }" @keyup="evento => estado.transferindo = evento.target.value" type="number" placeholder="Quantia para transferir">

  <br>
  <hr>

  <ul>
    <li v-for="nome in estado.nomes">
      {{ nome }}
    </li>
  </ul>
  <input @keyup="evento => estado.nomeAInserir = evento.target.value" type="text" placeholder="digite um novo nome">
  <button @click="cadastraNome()" type="button">Cadastrar nome</button>
</template>

<style scoped>
  img {
    max-width: 200px;
  }

  .invalido {
    outline-color: red;
    border-color: red;
  }
</style>
