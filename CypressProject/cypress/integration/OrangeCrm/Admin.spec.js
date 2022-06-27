/// <reference types='cypress' />
import Admin from '../../pageObjects/Admin'
import Login from '../../pageObjects/Login'

var login;
var admin;
describe('Add Admin Test', () => {
    before(() => {
        login = new Login();
        admin = new Admin();
    });
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        login.userName().type('Admin');
        login.passWord().type('admin123');
        login.loginBtn().click();
        admin.admin().click();
    });
    it('Add Addmin Role', () => {
        admin.addBtn().click();
        admin.userRole().select('ESS');
        admin.employeeName().type('Anthony Nolan');
        cy.contains('Anthony Nolan').click();
        admin.userName().type('SURAJ123')
        admin.status().select('Enabled');
        admin.password().type('Password@123');
        admin.confirmPassword().type('Password@123');
        admin.saveBtn().click();
        cy.get('div.message.success.fadable').then((el) => {
            expect(el.text().trim()).to.contains('Successfully Saved')
        });
    });
});