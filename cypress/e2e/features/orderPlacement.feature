Feature: NopCommerce e2e testing

    Feature NopCommerce order placement with different scenarios

    Scenario: Buy a product as guest user
        Given User opens NopCommerce website
        And User searches for the product
        And User adds the item to the cart
        And User checkouts the order
        And User enters personal details for shipment
        And User confirms the order
        Then User sees the order confirmation message

    Scenario: Buy a product as a logged in user
        Given User goes to the login page
        And User enters the login credentials
        And User adds product to the cart
        And User enters personal data and place an order
        Then User sees a thank you page for order confirmation

    Scenario: Error message validation
        Given User adds item to the cart
        And User checkout the order without sharing shipping data
        Then Right error messages are shown