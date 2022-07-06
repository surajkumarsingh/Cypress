/// <reference types="cypress-xpath" />
/// <reference types="cypress" />


describe('Lambda Test Cypress 101 MCQs', () => {
    it('Q1. File Upload', () => {
       const file = 'Resume.txt';
        cy.visit('https://tus.io/demo.html')
        cy.readFile('.//cypress//fixtures//Resume.txt').then((content) => {
        cy.get("input[type='file']").attachFile(file);
        /**
         * Below is faulty code once file uploded locator will removed from DOM.
         */
        //cy.get("input[type='file']").click()
        cy.log(content);
        });
    });
     it('Q.16 Right Assertion', () => {
     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     //**INFO: Cypress don't have mouse hover function, using jquery we can invoke show method*/
     /**should('visible');
      * Faulty code : The chainer 'visible' is a language chainer provided to improve the 
      * readibilty of your assertion.
      *  */  
     cy.get('.mouse-hover-content').invoke('show').should('be.visible');
    });
it('Q 30. Two different Origin URL',()=>{
/**
 * Error when try to access Two origin URL
 */
cy.visit('www.google.com')
cy.visit('www.microsoft.com')
})

it.only('Q 39. KeyBoard Enter button',()=>{
    /**
     * Error when try to access Two origin URL
     */
    cy.visit('www.google.com')
    cy.get('input.gLFyf.gsfi').type('google')
    cy.get('input.gLFyf.gsfi').type('{enter}')
    cy.log(expect(13).to.be.within(7,15));
    })

});