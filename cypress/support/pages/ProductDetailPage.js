class ProductDetailPage {

    pageHeader() {
        return cy.get('h1')
    }

    computerRam() {
        return cy.get('#product_attribute_2')
    }

    computerHD() {
        return cy.get('#product_attribute_3_7')
    }

    addToCart() {
        return cy.get('#add-to-cart-button-1')
    }

    clickAddToCart(urlSelector) {
        return cy.get(`a[href*="/${urlSelector}"]`).eq(0)
    }

    shoppingCart() {
        return cy.get('.cart-label')
    }

}
export default ProductDetailPage;