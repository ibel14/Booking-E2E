import { StayOpt } from '../../pageobjects/stay-options';

describe('Looking for hotels and apartments', () => {
    const stayOpt = new StayOpt();

    it ('Visit stays options page', () => {
        stayOpt.navigateStays();
    })

    it ('Specify the city to search', () => {
        stayOpt.searchTextBox().type('Unawatuna');
        cy.get('[id="basiclayout"]').click();
    });

    it ('Choose a date for booking', () => {
        stayOpt.checkInDate().click();
        cy.get('[data-date="2022-08-25"]').click();

        stayOpt.checkOutDate().click();
        cy.get('[data-date="2022-09-15"]').click();
        stayOpt.searchButton().click();
    });

    it ('Click checkbox for filter', () => {
        cy.get('[class="b1e6dd8416"]').contains('Entire homes').click();
        cy.get('button[type=submit]').click();
    });

    it ('Choose hotels for 5 stars', () => {
        cy.get('[class="dcd1ccc0b6"]').contains('5 stars').click();
    });
    
});