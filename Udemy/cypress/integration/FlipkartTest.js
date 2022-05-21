/// <reference types="Cypress" />

describe('Flipkart Test', () => {

	before(() => {
		cy.visit("https://www.flipkart.com/")
	})
	/*** 
	Get the DOM element containing the text. 
	 DOM elements can contain more than the desired text and still match. 
	 Additionally, Cypress prefers some DOM elements over the deepest element found.*/
	it('Login Test', () => {
		// Yield first el in document containing 'Hello'
		cy.contains('Login').should('contain', 'Login').click()
		cy.get("input[class='_2IX_2- VJZDxU']").type('7903223869')
		cy.get("input[type='password']").type('flipkart')
	//	cy.get("button[class='_2KpZ6l _2HKlqd _3AWRsL']").click()
		cy.get("._2KpZ6l._2doB4z").click()
	})
	it('Go UPS options', ()=>{
       
		cy.get('.exehdJ').trigger('mouseover')
		cy.scrollIntoView('div:nth-child(5) a:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1)')
		cy.wait(3000)
		cy.get("div:nth-child(5) a:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1)").trigger('mouseover')
		cy.wait(3000)
		cy.get('._6WOcW9._2-k99T').trigger('mouseover')
		cy.contains('UPS').click()
	})
	it.skip(' A Product Search Test', () => {
	cy.get("input[placeholder='Search for products, brands and more']").type('redmi Note 10').wait(3000).type('{enter}')
		cy.reload()
		//refer w3school css selector
		cy.get("a[ href^='/redmi-note-10-aqua-green-64-gb']").first().invoke('removeAttr', 'target').click();

	})

	it.skip('CheckOut Test', () => {
//	cy.wait(3000)
// cy.window().then((win) => {
// 	win.eval('document.getElementsByClassName("_1KOMV2").click');
//  })
cy.wait(3000)
	cy.get('._2KpZ6l._2U9uOA._3v1-ww').trigger('click')

	})
})