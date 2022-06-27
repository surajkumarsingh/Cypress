/// <reference types='cypress'/>
class Recruitment{

recruitment(){return cy.xpath("//a/b[text()='Recruitment']")}

addBtn(){ return cy.get('#btnAdd')}

firstName(){  return cy.get('#addCandidate_firstName')}

lastName(){  return cy.get('#addCandidate_lastName')}

email(){  return cy.get('#addCandidate_email')}

contact(){  return cy.get('#addCandidate_contactNo')}

selectVacancy(){return cy.get('#addCandidate_vacancy')}

uploadResume(){ return cy.get('#addCandidate_resume')}

applyDate(){ return cy.get('#addCandidate_appliedDate')}

keepData(){ return cy.get('#addCandidate_consentToKeepData')}

saveBtn(){return cy.get('#btnSave')}

vacancies(){return cy.get('#menu_recruitment_viewJobVacancy');}

jobTitle(){ return cy.get('#addJobVacancy_jobTitle');}

vancancyName(){ return cy.get('#addJobVacancy_name');}

hiringManager(){ return cy.get('#addJobVacancy_hiringManager');}

NoOfPositions(){return cy.get('#addJobVacancy_noOfPositions');}

description(){ return cy.get('#addJobVacancy_description');}


}

export default Recruitment;