// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })





Cypress.Commands.add('addBillingAddress', (name, village, company, email, mnumber, country) => {


    cy.get('input[id="billing_first_name"]').type(name)
    cy.get('input[id="billing_last_name"]').type(village)
    cy.get('input[name="billing_company"]').type(company)
    cy.get('input[name="billing_email"]').type(email)
    cy.get('input[name="billing_phone"]').type(mnumber)
    cy.get('.select2-chosen').first().type(country)
    //cy.get('select2-input').last().type(country)

})