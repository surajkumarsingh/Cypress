/// <reference types='cypress'/>
import 'cypress-file-upload'
import Login from '../../pageObjects/Login'
import Recruitment from '../../pageObjects/Recruitment';
var login;
var recruitment
describe('Add Candidates', () => {

  before(() => {

    login = new Login();
    recruitment = new Recruitment();
  });
  beforeEach('Going to Recruitment', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    login.userName().type('Admin');
    login.passWord().type('admin123');
    login.loginBtn().click();
    recruitment.recruitment().click();
  });
  it('Add Candidates',()=>{
    recruitment.addBtn().click();
    recruitment.firstName().type('TestUser');
    recruitment.lastName().type('LastName');
    recruitment.email().type('Teet@mail.com');
    recruitment.contact().type('00009994');
    recruitment.selectVacancy().select(1);
    recruitment.uploadResume().attachFile('Doc1.docx');
    //recruitment.applyDate().type('2022-07-10');
    recruitment.keepData().check();
    recruitment.saveBtn().click();  
    cy.get('div.message.success.fadable').then((el)=>{
    expect(el.text().trim()).to.contains('Successfully Saved')
    });
   }); 

   it.only('Add Vacancies', ()=>{
   new Recruitment().vacancies().click({force:true});
   recruitment.addBtn().click();
   new Recruitment().jobTitle().select(10);
   recruitment.vancancyName().type('Test2');
   recruitment.hiringManager().type('Orange');
   cy.contains('Orange Test').click();
   recruitment.NoOfPositions().type('500');
   recruitment.saveBtn().click();
   cy.get('div.message.success.fadable').then((el)=>{
    expect(el.text().trim()).to.contains('Successfully Saved')
    });
   });
});