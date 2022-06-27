import {Given, When, Then, And} from "cypress-cucumber-preprocessor"


Given('I open ecommerce page',()=>{
	cy.visit('https://rahulshettyacademy.com/angularpractice/');
})