const saudacao = require('./saudacao')

describe ('testes para saudacao', () => {
    test('deverá retornar Olá, Maria.', () => {
        const olaMaria = saudacao.dizOla('Maria')

        expect(olaMaria).toBe('Olá, Maria')
    })
})