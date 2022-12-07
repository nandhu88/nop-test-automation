class CheckoutPage {

    pageHeader() {
        return cy.get('h1')
    }

    confirmOrder() {
        return cy.get('#confirm-order-buttons-container > .button-1')
    }

    orderConfirmMessage() {
        return cy.get('.section > .title > strong')
    }
}



export default CheckoutPage;