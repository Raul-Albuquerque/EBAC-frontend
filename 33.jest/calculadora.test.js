const calc = require ('./calculadora')

describe('testes para calculadora', () => {
    test('somar 2 e 2 deve resultar 4', () => {
        const minhaSoma = calc.soma(2, 2)
    
        expect(minhaSoma).toBe(4)
    })
    
    test('muiltiplicar 3 com 3 deve resultar 9', () => {
        const minhaMultiplicacao = calc.multiplicacao(3, 3)
    
        expect(minhaMultiplicacao).toBe(9)
    })
})
