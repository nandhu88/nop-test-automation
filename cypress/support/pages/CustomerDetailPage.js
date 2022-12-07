class CustomerDetailPage {

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

}
export default CustomerDetailPage;