//function
function calculaArea(base: number, altura: number):number {
    return base * altura;
}

//arrow function
const calculaArea2 = (base:number, altura:number):number => base * altura;

//rest operator
// function somar(...numeros: number) {
//     //numeros.reduce();
// }

function teste() :string | number {
    if(10 > 5) {
        return 'dez é maior do que cinco';
    } else {
        return 5
    }
}

const resultadoTeste = teste();
