/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe'
describe('OrangeHRM Form', () => {

  before(() => {
    cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')
  })

  it('Fill Form', () => {
    //  cy.contains('FREE 30 Day Trial').click()
    cy.get('.labeledtext').type('Demo22').should('have.value', 'Demo22')
      .get('#Form_submitForm_FirstName').first().type('FirsName')
      .get('#Form_submitForm_LastName').first().type('LastName')
      .get('#Form_submitForm_Email').type('Demmo22@mail.com')
      .get('#Form_submitForm_JobTitle').type('QA')
    cy.get("select[class='dropdown no-of-emp']").select('501 - 600').should('have.value', '501 - 600')
      .get('#Form_submitForm_CompanyName').type('Demo')
      .get('#Form_submitForm_Industry').select('Education').should('have.value', 'Education')
      .get('#Form_submitForm_Contact').type('00090000')
      .get('#Form_submitForm_Country').select('India').should('have.value', 'India')
      cy.get('#Form_submitForm_State').should('be.visible').select('Goa')
      .get('#Form_submitForm_SetDummyData').check()
      .get('#Form_submitForm_action_request').click()
      //  // load the frame
      // cy.frameLoaded("iframe[title='reCAPTCHA']")
      //  //shift the focus to frame
      //  cy.iframe().get('.recaptcha-checkbox-border').click()
      
  })
})