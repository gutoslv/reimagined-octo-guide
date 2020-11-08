import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('they are logged in', () => {
  cy.loginByApi(Cypress.env('user_email'), Cypress.env('user_password'));
});

When('they add a dress to the cart and go to checkout', () => {
  cy.visit('/index.php?id_product=4&controller=product');
  cy.clickElement('#add_to_cart');
});

When('they proceed to the next step', () => {
  cy.clickElement('.cart_navigation > .button > span');
});

When('they confirm the address to proceed to the next step', () => {
  cy.clickElement('.cart_navigation > .button > span');
});

When('they accept the ToS to proceed to the next step', () => {
  cy.clickElement('#cgv');
  cy.clickElement('.cart_navigation > .button > span');
});

When('they choose to pay by bank wire', () => {
  cy.clickElement('a.bankwire');
});

When('they confirm the order', () => {
  cy.clickElement('.cart_navigation > .button > span');
});

When('they not agree with the ToS', () => {
  cy.verifyCheckboxNotChecked('#cgv');
});

When('try to proceed to next step', () => {
  cy.clickElement('.cart_navigation > .button > span');
});

Then('they should see the {string} message', (successMessage: string) => {
  cy.verifyText('p.cheque-indent strong', successMessage);
});

Given('they are into the shipping step of checkout', () => {
  cy.visit('/index.php?id_product=4&controller=product');
  cy.clickElement('#add_to_cart');
  cy.clickElement('.cart_navigation > .button > span');
  cy.clickElement('.cart_navigation > .button > span');
  cy.verifyText('.step_current span', '04. Shipping');
});

Then('they should see the error message {string}', (errorMessage: string) => {
  cy.verifyText('p.fancybox-error', errorMessage);
});
