/// <reference types = "cypress" />
const BASE_URL= Cypress.config('baseUrl')
it(' login test' , function() {
  //cy.visit('https://app_url.com/login')
  cy.visit('/')
  cy.get(':nth-child(1) > .form-control').type('admin')
  cy.get(':nth-child(2) > .form-control').type('admin')
  cy.get('.btn').click()
  })