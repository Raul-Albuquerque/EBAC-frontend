/// <reference types="cypress" />  

describe('Testes para a página de inclusão de contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve realizar a inclusão de um contato', () => {
        cy.get('input[type="text"]').type('Raul Albuquerque')
        cy.get('input[type="email"').type('raulalbuquerque@teste.com')
        cy.get('input[type="tel"').type('81 998779008')
        cy.get('.adicionar').click()
    })

    it('Deve realizar a alteração de um contato', () => {
        cy.get('.edit').last().click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="text"]').type('Raul Macedo')
        cy.get('input[type="email"').clear()
        cy.get('input[type="email"').type('raulmacedo@teste.com')
        cy.get('input[type="tel"').clear()
        cy.get('input[type="tel"').type('81 998626379')
        cy.get('.alterar').click()
    })

    it('Deve realizar a remoção de um contato', () => {
        cy.get('.delete').last().click()
    })
})