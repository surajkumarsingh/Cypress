/// <reference types="Cypress" />
// All view port provided by cypress

describe('View Ports', () => {

	beforeEach(() => {
		cy.visit("https://www.google.com")
		console.log("Before Each test")

	});
	it('Open in macbook', () => {
        
		cy.viewport('macbook-13')
		cy.screenshot()
		cy.wait(200)
	})
	it('Open in ipad', () => {

		cy.viewport('ipad-2')
		cy.screenshot()
		cy.wait(200)
		
	})

})