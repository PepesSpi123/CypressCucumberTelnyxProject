const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import MainPage from "../e2e/pages/main.page";

const mainPage = new MainPage()

Given ("I visit telnyx.com", () => {
  mainPage.goToMain()
  mainPage.acceptCookies()
});

When("I scroll down to the API section", () => {
  mainPage.scrollToLearnMoreBtn()
})

When("I click the button 'Lear more' in API section", () => {
  mainPage.clickLearnMoreBtn()
});

Then("I should be switched to the page with API documentation", () => {
  cy.url().should('include', '/docs')
}) 