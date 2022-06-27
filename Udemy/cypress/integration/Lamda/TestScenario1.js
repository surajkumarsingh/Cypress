/// <reference types="cypress-xpath" />
/// <reference types="cypress" />


describe('Slider', ()=>{
it.skip('Slider', ()=>{

    cy.visit('https://www.lambdatest.com/selenium-playground')
    cy.xpath("//a[text()='Drag & Drop Sliders']").click()
    // invoke on vlaue attribute and trigger change
   // cy.get("input[type='range'][value='15']").invoke('val', 95).trigger('change').siblings('output').invoke('val', 95).trigger('change').should('have.text', 95);
    //cy.wait(4000);
    //cy.get("input[type='range'][value='15']").dblclick()
    cy.get("input[type='range'][value='15']").trigger('mousedown', 200, 10, {force:true}).click();
   // cy.get("input[type='range'][value='15']").click(200, 10)//trigger('mouseright').trigger('mouseleave').siblings('output')//.should('have.text', 95);


});

it('Samsung Note 9', ()=>{

    cy.visit('https://www.lambdatest.com/selenium-playground')
  
cy.get("//a[text()='Input Form Submit']").click();
cy.viewport('Samsung Note 9');
});

});