/// <reference types="Cypress" />

describe('Product Shop E2E', () => {
	var productprice;
	var cartprice;
	it('Product Search', () => {
		cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
		cy.get('input.search-keyword').type('ca');
		cy.get('.products-wrapper .product:visible').should('have.length', 4);
		// antoher way to get child/descendent element(s)
		cy.get('.products-wrapper').find('.product').should('have.length', 4);
		//cy.get('.products-wrapper').find('.product').eq(1).contains('ADD TO CART').click();
		cy.get('.products-wrapper').find('.product').each(($el, index, $list) => {
			if ($el.find('h4.product-name').text().includes('Capsicum')) {
				cy.wrap($el).find('button').click();
				productprice = $el.find('.product-price').text();
				cy.get('.cart-info').find('tbody td strong').each(($el2, index, $list) => {
					cartprice =  $list[1].innerText;
					expect(productprice).to.equal(cartprice);	
				});
			}					
		});	
	});
});