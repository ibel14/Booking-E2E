import { MainPage } from '../../pageobjects/main-page';

describe('Specify search parameters', () => {
    const mainPage = new MainPage();

    it ('Visit the web-site', () => {
        mainPage.navigate();
    });

    it ('Specify the city to search', () => {
        mainPage.searchTextBox().type('Unawatuna');
    })

    it ('Pick date', () => {
        mainPage.checkInDate().click();
        cy.get('[data-date="2022-08-22"]').click();
        cy.get('[data-bui-ref="calendar-next"]').click();
        cy.get('[data-date="2022-09-14"]').click();
    });

    it ('Add a child 7 years old', () => {
        mainPage.addOptions().click();
        cy.get('[aria-label="Increase number of Children"]').click();
        cy.get('[class="sb-group-field-has-error"]').select('7');
        mainPage.searchButton().click();
    })
    
});