//REST OPERATOR
function somarComRest (...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}
//console.log(somarComRest(10, 20, 30));

//SPREAD OPERATOR

//com numeros
const numeros = [1,2,3,4];
console.log(...numeros);

//com strings
const timesDeFutebolDeSp = ['santos', 'palmeiras', 'bragantino', 'são paulo'];
const timesDeFutebolDoRio = ['vasco', 'botafogo', 'flamengo', 'fluminense'];

const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDoRio];
console.log(timesDeFutebol);

//com objetos
const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaAna);

//desestruturação com objeto
const { motor: motorCarroAna } = carroDaAna;
const { motor: motorCarroJulia } = carroDaJulia;

console.log(motorCarroAna);
console.log(motorCarroJulia);

//desestruturação com arrays
const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;
console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);
