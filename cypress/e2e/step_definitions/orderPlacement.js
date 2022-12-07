import { Given, Then, And, When } from "@badeball/cypress-cucumber-preprocessor";

Given('Visit nopCommerce website', () => {
    cy.viewport(1200, 800)
    cy.visit("https://demo.nopcommerce.com/")
    cy.title().should('include', 'nopCommerce demo store')
})