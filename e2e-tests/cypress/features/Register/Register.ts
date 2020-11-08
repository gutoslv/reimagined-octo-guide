import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('they fill the email address to create an account with a new {string}', (email: string) => {
  email = Cypress.env('user_register_email');
  cy.fillInput('#email_create', email);
});

Given('they click the create account button', () => {
  cy.clickElement('#SubmitCreate');
});

When(
  'they fill the personal information form with valid {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}',
  (
    title: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    dayOfBirth: string,
    monthOfBirth: string,
    yearOfBirth: string,
  ) => {
    let titleSelector: string = '';
    if (title === 'Mr.') {
      titleSelector = '#id_gender1';
    } else if (title === 'Mrs.') {
      titleSelector = '#id_gender2';
    }

    email = Cypress.env('user_register_email');
    password = Cypress.env('user_register_password');

    cy.clickElement(titleSelector);
    cy.fillInput('#customer_firstname', firstName);
    cy.fillInput('#customer_lastname', lastName);
    cy.verifyInput('#email', email);
    cy.fillInput('#passwd', password);
    cy.selectDropdown('#days', dayOfBirth);
    cy.selectDropdown('#months', monthOfBirth);
    cy.selectDropdown('#years', yearOfBirth);
  },
);

When(
  'they fill the address information form with valid {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}',
  (
    firstName: string,
    lastName: string,
    address1: string,
    city: string,
    state: string,
    zipCode: string,
    country: string,
    mobilePhone: string,
  ) => {
    cy.verifyInput('#firstname', firstName);
    cy.verifyInput('#lastname', lastName);
    cy.fillInput('#address1', address1);
    cy.fillInput('#city', city);
    cy.selectDropdown('#id_country', country);
    cy.selectDropdown('#id_state', state);
    cy.fillInput('#postcode', zipCode);
    cy.fillInput('#phone_mobile', mobilePhone);
  },
);

When('click on register button', () => {
  cy.clickElement('#submitAccount');
});

Then(
  'they should see their {string} and {string} into the menu',
  (firstName: string, lastName: string) => {
    cy.verifyText('a.account', firstName + ' ' + lastName);
  },
);
