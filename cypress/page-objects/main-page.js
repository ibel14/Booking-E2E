export class MainPage {
 
    navigate = () => cy.visit('https://www.booking.com/index.html');

    searchTextBox = () => cy.get("input[id='ss']");
    checkInDate = () => cy.get('[class="sb-date-field__icon sb-date-field__icon-btn bk-svg-wrapper calendar-restructure-sb"]').eq(1);
    addOptions = () => cy.get('[id="xp__guests__toggle"]');
    searchButton = () => cy.get('button').contains('Search');

    chooseCurrency = () => cy.get('[data-tooltip-text="Choose your currency"]');
    chooseLanguage = () => cy.get('[data-modal-aria-label="Select your language"]');
    
    }