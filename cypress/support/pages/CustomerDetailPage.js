class CustomerDetailPage {

    pageHeader() {
        return cy.get('h1')
    }

    customerFirstName() {
        return cy.get('#BillingNewAddress_FirstName')
    }
    customerLastName() {
        return cy.get('#BillingNewAddress_LastName')
    }
    customerEmail() {
        return cy.get('#BillingNewAddress_Email')
    }
    customerCompany() {
        return cy.get('#BillingNewAddress_Company')
    }
    customerCountry() {
        return cy.get('#BillingNewAddress_CountryId')
    }
    customerCity() {
        return cy.get('#BillingNewAddress_City')
    }
    customerAddress() {
        return cy.get('#BillingNewAddress_Address1')
    }

    customerAddressZipCode() {
        return cy.get('#BillingNewAddress_ZipPostalCode')
    }

    customerPhoneNo() {
        return cy.get('#BillingNewAddress_PhoneNumber')
    }

    nextCustomerInfo() {
        return cy.get('#billing-buttons-container > .new-address-next-step-button')
    }

    groundShiptment() {
        return cy.get('#shipping-method-buttons-container > .button-1')
    }

    creditCardPayment() {
        return cy.get('#paymentmethod_1')
    }

    continuePayment() {
        return cy.get('#payment-method-buttons-container > .button-1')
    }

    cardHolderName() {
        return cy.get('#CardholderName')
    }

    creditCardNo() {
        return cy.get('#CardNumber')
    }

    expireMonth() {
        return cy.get('#ExpireMonth')
    }

    expireYear() {
        return cy.get('#ExpireYear')
    }

    cardCode() {
        return cy.get('#CardCode')
    }

    confirmPayment() {
        return cy.get('#payment-info-buttons-container > .button-1')
    }

    addCustomerInfo() {
        const custInfoPage = new CustomerDetailPage()
        custInfoPage.customerFirstName().type('testFirstName')
        custInfoPage.customerLastName().type('testLastName')
        custInfoPage.customerEmail().type('QAtesting@gmail.com')
        custInfoPage.customerCompany().type('nopEcommerce')
        custInfoPage.customerCountry().select('Netherlands')
        custInfoPage.customerCity().type('Utrecht')
        custInfoPage.customerAddress().type('amsterdamstraat')
        custInfoPage.customerAddressZipCode().type('3423NS')
        custInfoPage.customerPhoneNo().type('02030231029')
    }

    addPaymentInfo() {
        const custInfoPage = new CustomerDetailPage()
        custInfoPage.cardHolderName().type('testName')
        custInfoPage.creditCardNo().type('4012 8888 8888 1881')
        custInfoPage.expireMonth().select('09')
        custInfoPage.expireYear().select('2027')
        custInfoPage.cardCode().type('093')
    }

}
export default CustomerDetailPage;