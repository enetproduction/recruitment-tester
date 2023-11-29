describe('Verify login process', () => {
    it('Test', () => {
        cy.visit('link')
        cy.get('#login_credentials').invoke('text').then((usernames) => {
            const usernamesArray = usernames.split('\n').slice(1);
            cy.get('#user-name').type(usernamesArray[0]).should('have.value', usernamesArray[0])
        })
    })
});