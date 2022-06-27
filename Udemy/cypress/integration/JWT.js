/// <reference types="Cypress" />
// maintented state of user, ideally JWT not stored in local storage for security purpose
describe('JWT session', () => {

    it('Extract Token And send Request', () => {

        cy.LoginAPI().then(() => {
            cy.visit("https://rahulshettyacademy.com/client", {
                //This is an Event to tell Browser to set thes properities before loading url
                onBeforeLoad: (window) => {
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            });

        });

        cy.get('.card-body button:last-of-type').eq(2).click();
        cy.get('.btn.btn-custom > .fa.fa-shopping-cart').click();
        cy.wait(2000);
        cy.get('.btn.btn-primary').eq(2).click();
        cy.get('.input.ddl:nth-of-type(1)').select('10');
        cy.get('.input.ddl').eq(1).select('30');
        cy.get('.input.txt.text-validated:nth-of-type(1)').eq(0).clear().type('4542993192922293');
        cy.get('.input[class="input txt"]').eq(0).type('4542');
        cy.get('input[class="input txt"]').eq(1).type('Suraj');
        cy.get("[placeholder*='Country']").type("Ind");
        cy.get('.ta-results.list-group.ng-star-inserted .ta-item.list-group-item.ng-star-inserted').invoke('show').each(($el, index, $list) => {
            if ($el.text() ==='India') {
               cy.wrap($el).click();
            }
        });
        cy.get('.action__submit.ng-star-inserted').click();
    });

});