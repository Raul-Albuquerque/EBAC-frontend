"use strict";
const alunos = [
    {
        nome: "Carlos",
        cursos: ["Frontend", "UX/UI"],
        idade: 27
    },
    {
        nome: "Ana",
        cursos: ["Frontend", "Python"],
        idade: 23
    }
];
alunos.push({
    nome: "Júlia",
    cursos: ["Arquitetura"],
    idade: 29
});
const novoAluno = {
    nome: "Lucas",
    idade: 32,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
