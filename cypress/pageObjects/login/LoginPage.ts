import { Selectors } from '../../support/types/customTypes';

class LoginPage {
  public selectors = {
    usernameInput: () => cy.get('#username'),
    passwordInput: () => cy.get('#password'),
    loginButton: () => cy.get('#login'),
  } satisfies Selectors;

  public login(username: string, password: string): void {
    this.selectors.usernameInput().type(username);
    this.selectors.passwordInput().type(password);
    this.selectors.loginButton().click();
  }

  public loginWithIncorrectPassword(
    username: string,
    incorrectPassword: string,
  ): void {
    this.selectors.usernameInput().type(username);
    this.selectors.passwordInput().type(incorrectPassword);
    this.selectors.loginButton().click();
  }

  public loginWithCorrectPassword(
    username: string,
    correctPassword: string,
  ): void {
    this.selectors.usernameInput().type(username);
    this.selectors.passwordInput().type(correctPassword);
    this.selectors.loginButton().click();
  }

  public loginWithEmptyCredentials(): void {
    this.selectors.loginButton().click();
  }

  public fillUsername(username: string): void {
    this.selectors.usernameInput().type(username);
  }

  public fillPassword(password: string): void {
    this.selectors.passwordInput().type(password);
  }

  public submitLoginForm() {
    this.selectors.loginButton().click();
  }
}

export default new LoginPage();
