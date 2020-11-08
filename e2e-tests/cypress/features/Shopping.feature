@shopping
Feature: Clothes Shopping

    As a registered user
    I want to buy awesome clothes
    So that I will look awesome

    Background: Log in
        Given they are logged in

    Scenario: Sucessfully buy a dress
        When they add a dress to the cart and go to checkout
        And they proceed to the next step
        And they confirm the address to proceed to the next step
        And they accept the ToS to proceed to the next step
        And they choose to pay by bank wire
        And they confirm the order
        Then they should see the "Your order on My Store is complete." message

    Scenario: Try to buy a dress without accepting the ToS
        And they are into the shipping step of checkout
        When they not agree with the ToS
        And try to proceed to next step
        Then they should see the error message "You must agree to the terms of service before continuing."