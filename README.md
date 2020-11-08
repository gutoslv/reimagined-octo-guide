# reimagined-octo-guide

This repo is an example of automation using Cypress and Cucumber preprocessor

# Prerequisites

- Yarn Classic
- Node

#Environment Variable
To not expose sensitive and personal information, the username/email and password are stored into environment variables, and not hard-coded. This also allows the code to be ran into multiple pipelines and different environments.

To set environment variables that works with Cypress please check the [Cypress Docs](https://docs.cypress.io/guides/guides/environment-variables.html) I do recommend using the [cypress.env.json option](https://docs.cypress.io/guides/guides/environment-variables.html#Option-2-cypress-env-json) to test locally

#Running the tests

To run the tests you need to:

- Clone this repo
- cd into e2e-tests
- run `yarn install` to install all dependencies used by this project
- run `yarn e2e-test` to run the tests with Electron browser in headless mode or run `yarn e2e-test-dev` to open the tests with the Test Runner
