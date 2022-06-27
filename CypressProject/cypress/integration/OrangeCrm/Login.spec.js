/// <reference types ="cypress" />
import Login from '../../pageObjects/Login'
var login;
describe('Login Test', () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        login = new Login();
    })
    it('Login Test', () => {
        login.userName().type('Admin')
        login.passWord().type('admin123')
        login.loginBtn().click();

    });

    it('Without Entering UserName and Password', () => {
        login.loginBtn().click();
        login.errorMsg().then((element)=>{
        expect(element.text()).equals('Username cannot be empty')
        })
    });

    it('Without Entering Password', () => {
        login.userName().type('Admin')
        login.loginBtn().click();
        login.errorMsg().then((element)=>{
        expect(element.text()).equals('Password cannot be empty')
        })
    });
    it('Entering Invalid Credentials', () => {
        login.userName().type('invalid')
        login.passWord().type('invalid123')
        login.loginBtn().click();
        login.errorMsg().then((element)=>{
        expect(element.text()).equals('Invalid credentials')
        })
    });
});