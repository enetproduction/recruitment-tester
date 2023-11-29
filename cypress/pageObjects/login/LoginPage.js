class LoginPage {

    usernameInput = () => cy.get('#username');
    passwordInput = () => cy.get('#password');
    loginButton = () => cy.get('#login');

    login(username, password) {
        cy.get(this.usernameInput).type(username);
        cy.get(this.passwordInput).type(password);
        cy.get(this.loginButton).click();
    }

    loginWithIncorrectPassword(username, incorrectPassword) {
        cy.get(this.usernameInput).type(username);
        cy.get(this.passwordInput).type(incorrectPassword);
        cy.get(this.loginButton).click();
    }

    loginWithCorrectPassword(username, correctPassword) {
        cy.get(this.usernameInput).type(username);
        cy.get(this.passwordInput).type(correctPassword);
        cy.get(this.loginButton).click();
    }

    loginWithEmptyCredentials() {
        cy.get(this.loginButton).click();
    }
}

export default LoginPage