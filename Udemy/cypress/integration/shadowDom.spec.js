/// <reference types='Cypress'/>
/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe'

describe('SHADOW DOM PRACTICE', () => {
    it('ShadowDom', () => {
        cy.visit('https://selectorshub.com/xpath-practice-page/');
        cy.get('#userName').shadow().find('#kils').type('CHAI')
        cy.get('#userName').shadow().frameLoaded('#pact1')
        cy.iframe().get('#jex').type('Kamryn') 
    })
})
