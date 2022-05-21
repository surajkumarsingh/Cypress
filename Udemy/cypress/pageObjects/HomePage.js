/// <reference types="Cypress" />
class HomePage {

    getNavBar() {
        return cy.get('.navbar-nav  > li[class=nav-item] > a.nav-link');
    }   
}

export default HomePage;