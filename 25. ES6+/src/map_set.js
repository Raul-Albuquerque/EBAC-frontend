
/*let meuMap = new Map();
meuMap.set("nome", "Raul");
meuMap.set("stack", "html, css, js");
console.log(meuMap);

const nome = meuMap.get("nome");
console.log(nome);

console.log(meuMap.size);
console.log(meuMap.has("nome"));

//recuperando as chaves
for (let chave of meuMap.keys()) {
    console.log(chave)
}

//recuperando o valor
for(let valor of meuMap.values()) {
    console.log(valor);
}

//recuperando as entradas
for(let entrada of meuMap.entries()) {
    console.log(entrada);
}

//Desestruturação
for(let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

//deletando um item do map
meuMap.delete("stack");
console.log(meuMap);
*/

const cpfs = new Set();

cpfs.add('81042757046');
cpfs.add('04135988024');
cpfs.add('84238611047');

console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['Raul', 'Gian Souza', 'Luana', 'Luana', 'Gian Souza', 'José Paulo'];
const arrayComSet = new Set([...array]);
const arraySemItensDuplicados = [...arrayComSet];

console.log(arraySemItensDuplicados);

