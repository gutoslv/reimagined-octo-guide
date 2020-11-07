Feature: Register a new user

    As an user from the website
    I want to create an account
    So that I can shop new clothes on and awesome e-commerce

    Scenario Outline: Succesfuly register a new user
        Given they are into the "Authentication" page
        And they fill the email address to create an account with a new <email>
        And they click the "create account" button
        When they fill the personal information form with valid <title>, <first name>, <last name>, <email>, <password>, <day of birth>, <month of birth>, <year of birth>
        And they fill the address information form with valid <first name>, <last name>, <address1>, <city>, <state>, <zip code>, <country>, <mobile phone>
        And click on "register" button
        Then they should be redirected to the "My account" page
        And they should see their <first name> and <last name> into the menu

        Examples:
            | email                | title | first name | last name | password | day of birth | month of birth | year of birth | address1         | city           | state     | zip code | country         | mobile phone |
            | "newer002@email.com" | "Mr." | "Denis"    | "Renault" | "12345"  | "15"         | "March"        | "1990"        | "Street example" | "Example City" | "Georgia" | "12345"  | "United States" | "12345"      |