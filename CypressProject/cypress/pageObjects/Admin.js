/// <reference types='cypress' />

class admin{

admin(){ return cy.get('#menu_admin_viewAdminModule');}

addBtn(){ return cy.get('#btnAdd');}

userRole(){ return cy.get('#systemUser_userType');}

employeeName(){ return cy.get('#systemUser_employeeName_empName');}

userName(){ return cy.get('#systemUser_userName');}

status(){return cy.get('#systemUser_status');}

password(){ return cy.get('#systemUser_password');}

confirmPassword(){ return cy.get('#systemUser_confirmPassword');}

saveBtn(){return cy.get('#btnSave');}
}


export default admin;