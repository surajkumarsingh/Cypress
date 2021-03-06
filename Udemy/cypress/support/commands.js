import Shop from '../pageObjects/Shop'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('AddToCart', (product) => {
	new Shop().getProducts().each(($el, index, $list) => {
		if($el.text().includes(product)) {
			new Shop().addtoCartBtn().eq(index).click();
		}
	});
});
Cypress.Commands.add('LoginAPI', (product) => {
	cy.request('POST', 'https://rahulshettyacademy.com/api/ecom/auth/login',{
    "userEmail":"surajAU@gamil.com", "userPassword":"Iamking@00"
	}).then((res)=>{
    expect(res.status).to.eq(200);
	// Set Env variable at global
	Cypress.env('token', res.body.token);
	});
});

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';