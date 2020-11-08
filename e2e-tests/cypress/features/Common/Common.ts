import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('they are into the Authentication page', () => {
  cy.visit('/index.php?controller=authentication&back=my-account');
});

Then('they should be redirected to the My account page', () => {
  cy.url().should('contain', 'controller=my-account');
});
