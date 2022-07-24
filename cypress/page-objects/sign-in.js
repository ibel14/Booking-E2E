export class SignIn {

    navSignIn = () => cy.visit('https://account.booking.com/sign-in');

    subButton = () => cy.get('button[type="submit"]');

}