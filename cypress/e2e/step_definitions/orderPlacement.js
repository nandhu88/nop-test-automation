import { Given, Then, And, When } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from '../../support/pages/HomePage'
import SearchProductPage from '../../support/pages/SearchProductPage'
import ProductDetailPage from '../../support/pages/ProductDetailPage'
import ShoppingCartPage from '../../support/pages/ShoppingCartPage'
import LoginPage from '../../support/pages/LoginPage'
import CustomerDetailPage from '../../support/pages/CustomerDetailPage'

const homePage = new HomePage()
const searchProductPage = new SearchProductPage()
const productDetailPage = new ProductDetailPage()
const custInfoPage = new CustomerDetailPage()

Given('User opens NopCommerce website', () => {
    cy.viewport(1200, 800)
    cy.visit("https://demo.nopcommerce.com/")
    cy.title().should('include', 'nopCommerce demo store')
})

And('User searches for the product', function () {
    homePage.selectCurreny().select('Euro')
    homePage.clickProductItem('computers');
    searchProductPage.pageHeader().should('have.text', 'Computers')
    cy.get('a[href*="/desktops"]').contains(' Desktops ').click()
    searchProductPage.pageHeader().should('have.text', 'Desktops')
    searchProductPage.clickProductItem('build-your-own-computer');
    productDetailPage.pageHeader().should('have.text', 'Build your own computer')
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
    custInfoPage.customerFirstName().type('testName')
    custInfoPage.customerLastName().type('lastName')
    custInfoPage.customerEmail().type('email@gmail.com')
    custInfoPage.customerCompany().type('milie')
    custInfoPage.customerCountry().select('Netherlands')
    custInfoPage.customerCity().type('utrecht')
    custInfoPage.customerAddress().type('amsterdamstraat')
    custInfoPage.customerAddressZipCode().type('3423NS')
    custInfoPage.customerPhoneNo().type('02030231029')
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


