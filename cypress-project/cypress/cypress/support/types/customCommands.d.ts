declare namespace Cypress {
  export interface Chainable {
    /**
     * Visit any page
     * @param pageUrl
     */
    openPage(pageUrl: string): void;
  }
}
