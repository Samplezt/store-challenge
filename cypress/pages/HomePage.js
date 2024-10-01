import BasePage from "./BasePage"

const locales = require(`../locales/${Cypress.env('lang')}.json`)


class HomePage extends BasePage {
    constructor() {
        super()
        this.searchField          = () => cy.get('[data-testid="search-autocomplete"]')
        this.searchButton         = () => cy.get('[data-location="search_top:body"]')
        this.searchCategoryOpt    = () => cy.get('[data-testid="merListItem-container"]').eq(0)
        this.searchBrandOpt       = () => cy.get('[data-testid="merListItem-container"]').eq(1)
        this.searchItemList       = (cat) => cy.get('[location-2="category_transition_row"]').contains(cat)
        this.searchHistory        = () => cy.get('[data-testid="search-history"]').find('[data-testid="merListItem-container"]').eq(0)
        this.sectionTitle         = (title) => cy.get('h1').contains(title)
        this.searchHistoryList    = () => cy.get("section[data-testid='search-history'] div[data-testid='merListItem-container']")
    }

    searchByCategory(tier1, tier2, tier3) {
        this.searchField().click()
        this.searchCategoryOpt().click()
        this.sectionTitle(locales.categoryTitle).should('be.visible')
        this.searchItemList(tier1).click()
        this.sectionTitle(tier1).should('be.visible')
        this.searchItemList(tier2).click()
        this.sectionTitle(tier2).should('be.visible')
        this.searchItemList(tier3).click()
        this.sectionTitle(locales.searchTitle).should('be.visible')
    }

    searchByKeyword(keyword) {
        this.searchField().type(keyword)
        this.searchButton().click()
        this.sectionTitle(keyword).should('be.visible')
    }
}

export default HomePage