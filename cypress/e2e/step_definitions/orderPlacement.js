import { Given, Then, And, When } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from '../../support/pages/HomePage'
import SearchProductPage from '../../support/pages/SearchProductPage'
import ProductDetailPage from '../../support/pages/ProductDetailPage'
import ShoppingCartPage from '../../support/pages/ShoppingCartPage'
import LoginPage from '../../support/pages/LoginPage'
import CustomerDetailPage from '../../support/pages/CustomerDetailPage'
import CheckoutPage from "../../support/pages/checkoutPage"

const homePage = new HomePage()
const searchProductPage = new SearchProductPage()
const productDetailPage = new ProductDetailPage()
const custInfoPage = new CustomerDetailPage()
const loginPage = new LoginPage()
const shoppingCart = new ShoppingCartPage()
const checkoutPage = new CheckoutPage()

Given('User opens NopCommerce website', () => {
    cy.viewport(1200, 800)
    cy.visit('/')
    cy.title().should('include', 'nopCommerce demo store')
})

And('User searches for the product', () => {
    homePage.selectCurrency().select('Euro')
    homePage.clickProductItem('computers').click()
    searchProductPage.pageHeader().should('have.text', 'Computers')
    searchProductPage.clickProductItem('desktops').click({ force: true })
    searchProductPage.pageHeader().should('have.text', 'Desktops')
    searchProductPage.clickProductItem('build-your-own-computer').click()
    productDetailPage.pageHeader().should('have.text', 'Build your own computer')
})

And('User adds the item to the cart', () => {
    productDetailPage.computerRam().select('2 GB')
    productDetailPage.computerHD().check().should('be.checked')
    productDetailPage.addToCart().click()
    cy.scrollTo('top')
    cy.wait(3000)
    productDetailPage.clickAddToCart('cart').click()
})

And('User checkouts the order', () => {
    shoppingCart.pageHeader().should('have.text', 'Shopping cart')
    shoppingCart.productName().should('have.text', 'Build your own computer')
    shoppingCart.productAmount().should('include.text', '€1216.90')
    shoppingCart.agreeTerms().check().should('be.checked')
    shoppingCart.checkoutOrder().click()
    loginPage.asGuest().click()
})

And('User enters personal details for shipment', () => {
    custInfoPage.pageHeader().should('have.text', 'Checkout')
    custInfoPage.addCustomerInfo()
    custInfoPage.nextCustomerInfo().click()
    custInfoPage.groundShiptment().click()
    custInfoPage.creditCardPayment().check().should('be.checked')
    custInfoPage.continuePayment().click()
    custInfoPage.addPaymentInfo()
    custInfoPage.confirmPayment().click()
})

And('User confirms the order', () => {
    checkoutPage.confirmOrder().click()
})

Then('User sees the order confirmation message', () => {
    checkoutPage.pageHeader().should('have.text', 'Thank you')
    checkoutPage.orderConfirmMessage().should('have.text', 'Your order has been successfully processed!')
})

Given('User goes to the login page', () => {
    cy.viewport(1200, 800)
    cy.visit('/')
    cy.title().should('include', 'nopCommerce demo store')
    loginPage.loginMenu().click()
})

And('User enters the login credentials', () => {
    loginPage.userName().type('qatesting@gmail.com')
    loginPage.password().type('nopcommerce')
    loginPage.loginButton().click()
    searchProductPage.clickProductItem('electronics').click()
    cy.wait(2000)
    searchProductPage.clickProductItem('camera-photo').click({ force: true })
    cy.wait(2000)
})

And('User adds product to the cart', () => {
    searchProductPage.addToCartButton().eq(1).click()
    productDetailPage.shoppingCart().click()
    shoppingCart.agreeTerms().check().should('be.checked')
    shoppingCart.checkoutOrder().click()
})

And('User enters personal data and place an order', () => {
    // cy.get('#billing-buttons-container > .new-address-next-step-button').click()
    custInfoPage.nextCustomerInfo().click()
    custInfoPage.groundShiptment().click()
    custInfoPage.creditCardPayment().check().should('be.checked')
    custInfoPage.continuePayment().click()
    custInfoPage.addPaymentInfo()
    custInfoPage.confirmPayment().click()
    checkoutPage.confirmOrder().click()
})

Then('User sees a thank you page for order confirmation', () => {
    checkoutPage.pageHeader().should('have.text', 'Thank you')
    checkoutPage.orderConfirmMessage().should('have.text', 'Your order has been successfully processed!')
})



