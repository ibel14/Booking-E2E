export class StayOpt {
    
    navigateStays = () => cy.visit('https://www.booking.com/searchresults.html');

    searchTextBox = () => cy.get("input[name='ss']");

    checkInDate = () => cy.get('[data-testid="date-display-field-start"]');
    checkOutDate = () => cy.get('[data-testid="date-display-field-end"]');
    addOptions = () => cy.get('[data-testid="occupancy-config"]');

    searchButton = () => cy.get('button').contains('Search');

}