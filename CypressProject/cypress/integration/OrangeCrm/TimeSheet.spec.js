/// <reference types ='Cypress'/>
import Login from '../../pageObjects/Login'
import MyTimesheet from '../../pageObjects/MyTimesheet';
var login;
var myTimeSheet;
describe('TimeSheet', () => {
    before(() => {
        login = new Login();
        myTimeSheet = new MyTimesheet();
    })
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        login.userName().type('Admin');
        login.passWord().type('admin123');
        login.loginBtn().click();
    })
    it('Edit TimeSheet', () => {
        myTimeSheet.mytimeheet().click()
        myTimeSheet.editBtn().click();
        myTimeSheet.projectName().type('ACME')
        myTimeSheet.selectProject().each(($el, index, $list) => {
            if ($el.text() == 'ACME Ltd - ACME Ltd') {
                cy.wrap($el).click();
            }
        });
        myTimeSheet.activityName().select('Bug Fixes');
        myTimeSheet.saveBtn().click();
        cy.get('div.message.success.fadable').then((ele)=>{
            cy.log(ele.text());
        });
    cy.get('div.message.success.fadable').should('have.text', 'Successfully SavedClose');
    });
});