describe('Verify login process', () => {
    it('log in correctly', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('username').type('nazwa_usera');
      cy.get('password').type('hasło');
      cy.get('button-login').click();
      cy.url().should('include', '/inventory');
    });
  });