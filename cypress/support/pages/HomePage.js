class HomePage {

    selectCurrency() {
        return cy.get('#customerCurrency')
    }

    clickProductItem(urlSelector) {
        return cy.get(`a[href*="/${urlSelector}"]`).eq(0)
    }

}
export default HomePage;      