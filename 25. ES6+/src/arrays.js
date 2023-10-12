const alunos = ['Gustavo', 'Júlia', 'Paula', 'Wagner'];
const alunos2 = alunos.map(function(alunoAtual) {
    return {
        nome: alunoAtual,
        curso: 'Frontend'
    }
})

alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
})

const nomeDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `;
    return acumulador;
}, '')

console.log(nomeDosAlunos);