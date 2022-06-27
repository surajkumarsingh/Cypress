/// <reference types="cypress" />

class Login{


userName(){

    return cy.get('input#txtUsername');
}
 passWord(){

    return cy.get('input#txtPassword');
 }

loginBtn(){

    return cy.get('input#btnLogin');
}
errorMsg(){

    return cy.get('span#spanMessage');
}

}

export default Login;