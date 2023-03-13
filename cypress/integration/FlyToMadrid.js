
/// <reference types="cypress" />
describe('Madrid 2023', { retries: 2 }, () => {
    it('Check if prize for fly directly to Madrid is under 3500 for seven person', () => {
        cy.visit('/')
        cy.get('button').contains('Akceptuj').click()
        cy.wait(12000)
        cy.get('[data-test="ResultCardPrice"]').then(prize => {
            let prizeText = prize[0].innerText.match(/\d+/)
            if (prizeText[0] <= 3500) {
                //Wyślij maila
                cy.log(`Cena to ${prizeText[0]}`)
                cy.request('https://hook.eu1.make.com/1inw611duud5pzsg896cym54xlhw1l44')
            }
        })
    })
})