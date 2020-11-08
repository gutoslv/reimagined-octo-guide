import { Then, When } from 'cypress-cucumber-preprocessor/steps';

When('they fill the login form with a valid email and password', () => {
  cy.fillInput('#email', Cypress.env('user_email'));
  cy.fillInput('#passwd', Cypress.env('user_password'));
});

When('click on the sign in button', () => {
  cy.clickElement('#SubmitLogin');
});

When('they fill the login form with a valid email and invalid password', () => {
  cy.fillInput('#email', Cypress.env('user_email'));
  cy.fillInput('#passwd', 'randompassdword');
});

Then('they should see a error message informing that the password is invalid', () => {
  cy.verifyText('ol > li', 'Authentication failed.');
});
