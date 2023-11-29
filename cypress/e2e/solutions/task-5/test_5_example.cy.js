
import LoginPage from '../page-objects/LoginPage';
import MainPage from '../page-objects/MainPage'; // importujemy klasę, której nie używamy w teście 

describe('Test logowania', () => {

    const loginPage = new LoginPage();
    const mainPage = new MainPage(); // obiekt nigdzie nie jest używany, można usunąć 

    before(() => { // wykona się tylko RAZ, więc raz odwiedzimy stronę przed zestawem testów 
        loginPage.visit();
    });

    it('Poprawne logowanie', () => {
        loginPage.fillUsername('przykladowy_user');
        loginPage.fillPassword('przykladowe_haslo');
        loginPage.submitLoginForm();
        // W domyśle submitLoginForm powinien nas zalogować, więc test poniżej nie przejdzie 
        // gdyż formularz nie będzie już widoczny 
        // kandydat powinien użyc funkcji MainPage.logout() lub zaproponować inne 
        // np. zmiana kolejności testów, by happy path był na końcu 
        // np. powiedzenie o potrzebie wylogowania 
        // np. czyszczenie cache i ciastek by zresetować stan pomiędzy testami 
    });



    it('Logowanie z błędnymi danymi', function () { // użycie function zamiast arrow function 
        // to nie błąd, ale ciekawe co kandydat powie ;) 
        // Teoretycznie w obecnym stanie test nie powinien działać 
        loginPage.fillUsername('nieprawidlowy_user');
        loginPage.FillPassword('nieprawidlowe_haslo'); // PascalCase 
        loginPage.submitLoginForm();
    });
      it.only('Logowanie z błędnymi danymi', () => { 
        loginPage.fillUsername('bledny_username')
        loginPage.fillPassword('bledne_haslo')
      }); 
}); 