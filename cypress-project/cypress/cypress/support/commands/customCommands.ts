declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      openPage: typeof openPage;
    }
  }
}

export const openPage = (pageUrl: string): void => {
  cy.visit(pageUrl);
};
