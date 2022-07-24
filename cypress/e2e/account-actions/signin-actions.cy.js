import { SignIn } from '../../pageo-bjects/sign-in';

describe ('Verify login page', () => {
  const signIn = new SignIn();

  it('Sign In on Booking', () => {
    signIn.navSignIn();
  });

  it('Put email to the input', () => {
    cy.write('input[type="email"]', 'test_for_login@yahoo.com');
    signIn.subButton().click();
    cy.wait(2000);
  });

  it('Put password to the input', () => {
    cy.write('input[name="password"]', 'Test_account1');
    signIn.subButton().click();
  });

});