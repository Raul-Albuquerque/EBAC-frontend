
const carroDoJoao = {
    modelo: 'fiesta',
    fabricante: 'ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function () {
        console.log('vruum');
    }
}

const carroDaMaria = {
    modelo: 'ka',
    fabricante: 'ford',
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function() {
        console.log('vruum');
    }
}

function Carro (modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log('acelerar');
    }
}

const carroDoJoao2 = new Carro("fiesta", "ford", 2020, 2019);

function exibeAtributo(nomeAtributo) {
    console.log(carroDoJoao2[nomeAtributo])
}

exibeAtributo('fabricante');