
let idade: number = 26;
let altura: number = 1.75;

const nacionalidade: string = 'brasileira';

//arrays
const colegas: string[] = ['Raul', 'fernanda'];
const tecnologias: Array<string> = ['html', 'css', 'js'];
const notas: ReadonlyArray<number> = [7, 9, 5, 8];

//Tuplas
const lista: [nome: string, estaEstudando: boolean, idade: number] = ["Raul", true, 26];
console.log(lista);

//uniontype
let idadeDaAna: number | string = 25;
idadeDaAna = '25 anos';

//any
let dadosDaApi: any;
dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = "Raul";
dadosDaApi = [];
dadosDaApi = ["raul", 'html'];
