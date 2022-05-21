/// <reference types="Cypress" />

/**
 * Useful in edge TestCases and when Data is not available in backend. 
 */
describe('Network Intercept', () => {

	it('Modifying Response Data', () => {
		cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
		// takes Object Json request and response 
		cy.intercept(
			//Request object  
			{
				method: 'GET',
				url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
			},
			//response Object
			{
				statusCode: 200,
				body: [{
					"book_name": "Intercepted Data with Cypress",
					"isbn": "Suraj",
					"aisle": "2301"
				}]
			}).as('getBook');//save in alias so we can reuse
		cy.get('.btn.btn-primary')
			.click();
		// After click on button waiting for response then it will intercepted
		cy.wait('@getBook');
		cy.get('p').should('have.text', 'Oops only 1 Book available');
		cy.get('@getBook').should(({ request, response }) => {
			// comparing response data
			cy.get('tbody > tr').should('have.length', response.body.length);
		})
	});

/**
 * Used to Security Testing/Autorization Testing etc by Mocking Request
 */
	it('Modifying Request', () => {

		cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
		cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req) => {
			req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=Malhotra"
			req.continue((res)=>{
				expect(res.statusCode).to.equal(200);
			});
		}).as('dummyReq');
		cy.get('.btn.btn-primary')
			.click();
			cy.wait('@dummyReq');
	});

});