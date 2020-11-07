/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */

const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");

module.exports = (on) => {
  const options = browserify.defaultOptions;

  options.browserifyOptions.plugin.unshift(['tsify']);
  on("file:preprocessor", cucumber(options));
};