const alunos = [
    {
        nome: 'Raul',
        nota: 9
    },
    {
        nome: 'Daniel',
        nota: 4
    },
    {
        nome: 'Júlio',
        nota: 6
    },
    {
        nome: 'Mateus',
        nota: 7
    },
    {
        nome: 'Carlos',
        nota: 8
    },
    {
        nome: 'Joaquim',
        nota: 3
    },
    {
        nome: 'Damião',
        nota: 10
    },
]

const alunosAprovados = alunos.filter(function(item) {
    return item.nota >= 6;
})

console.log(alunosAprovados);