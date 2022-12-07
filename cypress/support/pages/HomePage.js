class HomePage {

    selectCurreny() {
        return cy.get('#customerCurrency')
    }

    clickProductItem(urlSelector) {
        return cy.get(`a[href*="/${urlSelector}"]`).eq(0).click()
    }

}
export default HomePage;      