class ShoppingCartPage {

    agreeTerms() {
        return cy.get('#termsofservice')
    }

    checkoutOrder() {
        return cy.get('#checkout');
    }

    pageHeader() {
        return cy.get('h1')
    }

    productName() {
        return cy.get('.product-name')
    }

    productAmount() {
        return cy.get('.cart-total-right')
    }

}
export default ShoppingCartPage;