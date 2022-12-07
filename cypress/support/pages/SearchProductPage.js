class SearchProductPage {

    pageHeader() {
        return cy.get('h1')
    }

    clickProductItem(urlSelector) {
        return cy.get(`a[href*="/${urlSelector}"]`).eq(0).click()
    }

}
export default SearchProductPage;