/// <reference types="cypress-xpath" />
/// <reference types='cypress'/>

class MyTimesheet {

    mytimeheet(){return cy.xpath("//span[text()='My Timesheet']")};

    editBtn(){ return cy.get('#btnEdit')};

    submitBtn(){cy.get('#btnSubmit')};

    projectName(){return cy.get("input[value*='Type for hints']")};

    selectProject(){return cy.get('div.ac_results li')}
   
    activityName(){return cy.get('.projectActivity')};
    
    saveBtn (){return cy.get('#submitSave')};

}

export default  MyTimesheet;