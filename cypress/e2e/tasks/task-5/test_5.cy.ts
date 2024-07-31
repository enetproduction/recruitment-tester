/*
Wykonaj code review poniższego testu, wylistuj wszystkie fragmenty lub konstrukcje,
które uznasz za złe, niepotrzebne lub wymagające optymalizacji lub zastosowania innych funkcji.
*/

import LoginPage from '../../../pageObjects/login/LoginPage';

describe('Test logowania', () => {
  before(() => {
    cy.openPage('/');
  });

  it('Poprawne logowanie', () => {
    LoginPage.login('test', 'test');
  });

  it('Logowanie z błędnymi danymi', function () {
    LoginPage.loginWithIncorrectPassword('test', 'test1');
  });

  it.only('Logowanie bez danych', () => {
    LoginPage.login('', '');
  });
});
