Feature: Login

    As an user
    I want to be able to log in
    So that I can shop new clothes


    Background: Login page
        Given they are into the Authentication page
    Scenario: Successfuly Login
        When they fill the login form with a valid email and password
        And click on the sign in button
        Then they should be redirected to the My account page

    Scenario: Login with wrong password
        When they fill the login form with a valid email and invalid password
        And click on the sign in button
        Then they should see a error message informing that the password is invalid