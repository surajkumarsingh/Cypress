class Shop{
    getProducts() {
        return cy.get('.card-title>a');
    }
    addtoCartBtn() {
        return cy.get('.btn.btn-info');
    }
    checkOutBtn() {
        return cy.get('.nav-link.btn.btn-primary');
    }
    checkOutBtn2() {
        return cy.get('.btn.btn-success');
    }
    deliveryLocation() {
        return cy.get('input#country');
    }
    termsCheck() {
        return cy.get('input#checkbox2');
    }
    purchase() {
        return cy.get('input[value=Purchase]');
    }

    successMsg() {
        return cy.get('.alert.alert-success.alert-dismissible');
    }
}
export default Shop;