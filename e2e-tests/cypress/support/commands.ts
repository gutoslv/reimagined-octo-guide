// @ts-check
///<reference path="../global.d.ts" />

Cypress.Commands.add('clickElement', (selector) => {
  cy.get(selector).click();
});

Cypress.Commands.add('verifyUrl', (url) => {
  cy.url().should('contain', url);
});

Cypress.Commands.add('verifyText', (selector, text) => {
  cy.get(selector).should('have.text', text);
});

Cypress.Commands.add('verifyInput', (selector, text) => {
  cy.get(selector).should('have.value', text);
});

Cypress.Commands.add('fillInput', (selector, text) => {
  cy.get(selector).type(text);
});

Cypress.Commands.add('selectDropdown', (selector, value) => {
  cy.get(selector).select(value);
});

Cypress.Commands.add('loginByApi', (user, password) => {
  cy.request({
    method: 'POST',
    url: '/index.php?controller=authentication',
    form: true,
    body: {
      email: user,
      passwd: password,
      back: 'my-account',
      SubmitLogin: '',
    },
  });
});

Cypress.Commands.add('hoverElement', (selector) => {
  cy.get(selector).trigger('mouseover');
});

Cypress.Commands.add('verifyCheckboxNotChecked', (selector) => {
  cy.get(selector).should('not.be.checked');
});
