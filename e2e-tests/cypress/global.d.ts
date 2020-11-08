declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to click an element
     * @example clickElement('#id')
     */
    clickElement(selector: string): Chainable<any>;

    /**
     * Custom command to fill an input
     * @example fillInput('#id', '1234')
     */
    fillInput(selector: string, text: string): Chainable<any>;

    /**
     * Custom command to select a value from dropdown
     * @example selectDropdown('#id', '1234')
     */
    selectDropdown(selector: string, value: string): Chainable<any>;

    /**
     * Custom command to verify a value from input
     * @example verifyInput('#id', '1234')
     */
    verifyInput(selector: string, value: string): Chainable<any>;

    /**
     * Custom command to verify the url address
     * @example verifyUrl('#controller')
     */
    verifyUrl(value: string): Chainable<any>;

    /**
     * Custom command to verify the text of an element
     * @example verifyText('#id', 'text should be here')
     */
    verifyText(selector: string, text: string): Chainable<any>;
  }
}
