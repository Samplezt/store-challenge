class BasePage {
    constructor() {}

    goToMainPage() {
        switch (Cypress.env('lang')) {
            case 'en':
                cy.visit('/en')
                break;
            default:
                cy.visit('/')
                break;
        }
    }
}

export default BasePage