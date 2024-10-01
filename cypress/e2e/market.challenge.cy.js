import HomePage from "../pages/HomePage"
import ListingPage from "../pages/ListingPage"

const locales = require(`../locales/${Cypress.env('lang')}.json`) // translations to support multiple languages on the tests
const testData = require('../fixtures/data.json')

const Home = new HomePage()
const Listing = new ListingPage()

describe('Market Search Scenarios', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    Home.goToMainPage()
  })
  
  it('Search conditions are set correctly', () => {
    Home.searchByCategory(locales.tierOneBooks, locales.tierTwoBooks, locales.tierThreeIt)
    Listing.tierOneDisplay().should('have.text', locales.tierOneBooks) // Check if selected tier 1 is displayed correctly
    Listing.tierTwoDisplay().should('have.text', locales.tierTwoBooks) // Check if selected tier 2 is displayed correctly
    Listing.tierThreeDisplay().should('contain',locales.tierThreeIt) // Check if selected tier 3 is displayed correctly
  })   

  it('Search conditions are set correctly from the latest browsing history', () => {
    Home.searchByCategory(locales.tierOneBooks, locales.tierTwoBooks, locales.tierThreeEntertainment)
    Home.goToMainPage()
    Home.searchByCategory(locales.tierOneBooks, locales.tierTwoBooks, locales.tierThreeIt)
    Home.goToMainPage()
    Home.searchField().click()
    Home.searchHistoryList().should('have.length', 2) // Check if there is 2 entries on the history
    Home.searchHistoryList().eq(0).should('have.text',locales.tierThreeIt) // Check if the latest entry on the search history is correct
    Home.searchHistoryList().eq(0).click()
    Listing.tierOneDisplay().should('have.text', locales.tierOneBooks) // Check if selected tier 1 is displayed correctly
    Listing.tierTwoDisplay().should('have.text', locales.tierTwoBooks) // Check if selected tier 2 is displayed correctly
    Listing.tierThreeDisplay().should('contain', locales.tierThreeIt) // Check if selected tier 3 is displayed correctly
    Home.searchByKeyword(testData.testSearchTerm)
    Home.goToMainPage()
    Home.searchField().click()
    Home.searchHistoryList().should('have.length', 3) //  check if there is 3 entries on the history now
    Home.searchHistoryList().eq(0).should('have.text',`${testData.testSearchTerm}, ${locales.tierThreeIt}`) // Check if the latest entry on the search history is correct
  })
})