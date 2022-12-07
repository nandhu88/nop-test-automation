import { Given, Then, And, When } from "@badeball/cypress-cucumber-preprocessor";

Given('User opens NopCommerce website', () => {
    cy.viewport(1200, 800)
    cy.visit("https://demo.nopcommerce.com/")
    cy.title().should('include', 'nopCommerce demo store')
})

And('User searches for the product', () => {
    cy.get('#customerCurrency').select("Euro")
    cy.get('a[href*="/computers"]').contains('Computer').click()
    cy.get('h1').should('have.text', 'Computers')
    cy.get('a[href*="/desktops"]').contains(' Desktops ').click()
    cy.get('h1').should('have.text', 'Desktops')
    cy.get('a[href*="/build-your-own-computer"]').eq(0).click()
    cy.get('h1').should('have.text', 'Build your own computer')
})

And('User adds the item to the cart', () => {
    cy.get('#product_attribute_2').select('2 GB')
    cy.get('#product_attribute_3_7').check().should('be.checked')
    cy.get('#add-to-cart-button-1').click();
    cy.scrollTo('top')
    cy.wait(3000)
    cy.get('a[href*="/cart"]').eq(0).click()
})

And('User checkouts the order', () => {
    cy.get('#termsofservice').check().should('be.checked')
    cy.get('#checkout').click();
    cy.get('.checkout-as-guest-button').click();
})

And('User enters personal details for shipment', () => {
    cy.get('#BillingNewAddress_FirstName').type('testName')
    cy.get('#BillingNewAddress_LastName').type('lastName')
    cy.get('#BillingNewAddress_Email').type('email@gmail.com')
    cy.get('#BillingNewAddress_Company').type('milie')
    cy.get('#BillingNewAddress_CountryId').select('Netherlands')
    cy.get('#BillingNewAddress_City').type('utrecht')
    cy.get('#BillingNewAddress_Address1').type('amsterdamstraat')
    cy.get('#BillingNewAddress_ZipPostalCode').type('3423ns')
    cy.get('#BillingNewAddress_PhoneNumber').type('02030231029')
    cy.get('#billing-buttons-container > .new-address-next-step-button').click()
    cy.get('#shipping-method-buttons-container > .button-1').click()
})

Then('User adds credit card details', () => {
    cy.get('#paymentmethod_1').check().should('be.checked')
    cy.get('#payment-method-buttons-container > .button-1').click()
    cy.get('#CardholderName').type('test name')
    cy.get('#CardNumber').type('4012 8888 8888 1881')
    cy.get('#ExpireMonth').select('09')
    cy.get('#ExpireYear').select('2027')
    cy.get('#CardCode').type('093')
    cy.get('#payment-info-buttons-container > .button-1').click()
})