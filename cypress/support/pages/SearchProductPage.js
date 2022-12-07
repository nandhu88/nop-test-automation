class SearchProductPage {

    pageHeader() {
        return cy.get('h1')
    }

    clickProductItem(urlSelector) {
        return cy.get(`a[href*="/${urlSelector}"]`).eq(0)
    }

    addToCartButton() {
        return cy.get('.product-box-add-to-cart-button')
    }

}
export default SearchProductPage;