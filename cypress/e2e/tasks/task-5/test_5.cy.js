/* 
Wykonaj code review poniższego testu, wylistuj wszystkie fragmenty lub konstrukcje, 
które uznasz za złe, niepotrzebne lub wymagające optymalizacji lub zastosowania innych funkcji. 
*/

import LoginPage from '../page-objects/LoginPage';
import MainPage from '../page-objects/MainPage';

describe('Test logowania', () => {

    const loginPage = new LoginPage();
    const mainPage = new MainPage();

    before(() => {
        loginPage.visit();
    });

    it('Poprawne logowanie', () => {
        loginPage.fillUsername('przykladowy_user');
        loginPage.fillPassword('przykladowe_haslo');
        loginPage.submitLoginForm();
    });

    it('Logowanie z błędnymi danymi', function () {
        loginPage.fillUsername('nieprawidlowy_user');
        loginPage.FillPassword('nieprawidlowe_haslo');
        loginPage.submitLoginForm();
    });

    it.only('Logowanie z błędnymi danymi', () => {
        loginPage.fillUsername('bledny_username');
        loginPage.fillPassword('bledne_haslo');
    });
}); 