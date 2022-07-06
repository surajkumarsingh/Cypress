/// <reference types="Cypress" />
import HomePage from '../pageObjects/HomePage';
import Shop from '../pageObjects/Shop';
describe('Data driven test', () => {
	var FormaData;
	var homePage;
	var shop;
	before('Set Data', () => {
		cy.fixture('FormData').then((data) => {
			FormData = data;
			homePage = new HomePage();
			shop = new Shop();
		});
	});
	beforeEach('Open Website', () => {
		cy.visit('https://rahulshettyacademy.com/angularpractice/');
	});

	it('Enter Data', () => {
		cy.get('input[name="name"]:nth-child(2)').type(FormData.name).should('have.attr','minlength','2');
		cy.get('input[name="email"]:nth-child(2)').type(FormData.Email);
		cy.get('#exampleInputPassword1').type(FormData.Password);
		cy.get('#exampleCheck1').check();
		cy.get('#exampleFormControlSelect1').select(FormData.Gender);
		cy.get('#inlineRadio2').check();
		cy.get('#inlineRadio3').should('be.disabled');
		cy.get('input[name="bday"]').type(FormData.DOB);
	});
	it('Add Product', () => {
		homePage.getNavBar().eq(1).click();
		cy.log(FormData.Email);
		//cy.readFile()
		//**Pause the script to debug */
		////	cy.pause();
		FormData.Product.forEach(element => {
			//**INFO: We can Custome methods in Support/command.js */
			cy.AddToCart(element);
		});
		shop.checkOutBtn().click();
		shop.checkOutBtn2().click();
		shop.deliveryLocation().type('Ind');
		cy.contains('India').click();
		shop.termsCheck().check({ force: true });
		shop.purchase().click();
		shop.successMsg().then((element) => {
			expect(element.text().includes('Success! Thank you! Your order will be delivered in next few weeks :-).')).to.be.true
		});
	});
});