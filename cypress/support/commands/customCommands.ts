declare global {
  namespace Cypress {
    interface Chainable {
         openPage: typeof openPage;
    }
  }
}
export const openPage = (pageUrl: string): void => {
  cy.visit(pageUrl);
};
