/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe'
describe('All Actions', () => {

beforeEach('Open Website',()=>{
	cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
});

  it('Check Boxs', () => {
  	cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      //***INFO : click() will do the but Check has extra validation */
     	cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1');
      // By this we check/uncheck multiple options
      cy.get('input[type=checkbox]').check(['option2', 'option3']);
      cy.get('input[type=checkbox]').uncheck(['option2', 'option3']);
  });

  it('Static Select/Dropdown', () => {
  	cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      // We can select by passing value or value
      cy.get('select').select('option2').should('have.text', 'Option2')
  });

  it(' Dynamic Dropdown', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      // We can select by passing value or value
      cy.get('#autocomplete').type('IND');
      cy.get('#ui-id-1 > li').find('div').each(($el, index, $list) => {
          if ($el.text() == 'India') {
              cy.wrap($el).click();
          }
      });
      cy.get('#autocomplete').should('have.value', 'India');
  });

  it('Check Visiblity/Invisibilty', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')     
      cy.get('#displayed-text').should('be.visible');
      cy.get('#hide-textbox').click();
      cy.get('#displayed-text').should('not.be.visible');
  });

  it('Radio Button', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')     
      cy.get('input[value=radio1]').click().should('be.checked');      
  });


  it('Alert', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    //**INFO: Cypress automatically accept the alert */
     cy.get('#alertbtn').click();

    //**INFO: We are listening an Event to get text of Alert */
    cy.on('window:alert', (str) => 
    {
      expect(str).to.equal('Hello , share this practice page and share your knowledge');
    });
    cy.get('#confirmbtn').click();
    cy.on('window:confirm', (str) => 
    {
      expect(str).to.equal('Hello , Are you sure you want to confirm?');
    });

  });


  it('Multi Tabs', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //**INFO: Cypress don't handle multi tabs so, we are removing target attribute by Jquery method */
    cy.get('#opentab').invoke('removeAttr', 'target').click();
    cy.title().should('include', 'Rahul Shetty Academy');
    cy.go('back');
    cy.title().should('include', 'Practice Page');    
  });


  it('Web Tables', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //**INFO:  */
    cy.get(' table[name=courses]').find('tr td:nth-child(2)').each(($el, index, $list) => {
      if($el.text() == 'WebServices / REST API Testing with SoapUI') {
        cy.log($el.next().text());
        expect($el.next().text()).to.equal('35');
      }
    });
  });

  it.only('Mouse Hover', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    //**INFO: Cypress don't have mouse hover function, using jquery we can invoke show method*/
    cy.get('.mouse-hover-content').invoke('show').should('be.visible');
    cy.contains('Top').click();
    cy.url().should('include', 'top');
    //**Another way */
    cy.contains('Top').click({ force: true });
    cy.url().should('include', 'top');
  });
  
  it('iframe***not work if frame has nested frame', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.frameLoaded('#courses-iframe');
    cy.screenshot();
    cy.iframe().find('.header-upper li a:nth-child(1)').eq(2).click();   
  });

  it('upload File', () => {
    //INFO: I have insatll dependency and import in command.js, file shold be in fixtures
    cy.visit('https://tus.io/demo.html')
    cy.get("input[type='file']").attachFile('cimpressLogo.jpg');
       
  });
});