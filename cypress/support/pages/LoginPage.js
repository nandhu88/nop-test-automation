class LoginPage {

    asGuest() {
        return cy.get('.checkout-as-guest-button')
    }
    loginMenu() {
        return cy.get('.ico-login')
    }
    userName() {
        return cy.get('#Email')
    }
    password() {
        return cy.get('#Password')
    }

    loginButton() {
        return cy.get('form > .buttons > .button-1')
    }

}
export default LoginPage;