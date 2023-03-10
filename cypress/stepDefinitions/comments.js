const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import MainPage from "../e2e/pages/main.page";

const mainPage = new MainPage()

When("I scroll down to the customers' comments", () => {
  mainPage.scrollToCustomersComments()
})
When("I switch customers' comments", () => {
  mainPage.checkingCommentIndex()
})

When("I use the arrow button", () => {
    mainPage.clickArrowBtn()
  })
;
When("I wait for a 10 seconds", () => {
  cy.wait(1000)
})
;

Then("I should see the anoter one customers' comment", () => {
    mainPage.checkingNextCommentIndex()
}) 
Then("customers' comments should be  switched automatically", () => {
  mainPage.checkingNextCommentIndex()
}) 