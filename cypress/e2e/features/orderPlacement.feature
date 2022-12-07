Feature: NopCommerce e2e testing

    Feature NopCommerce order placement with different scenarios

    Scenario: Successful order placement
        Given User opens NopCommerce website
        And User searches for the product
        And User adds the item to the cart
        And User checkouts the order
        And User enters personal details for shipment
        Then User adds credit card details