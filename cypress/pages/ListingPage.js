import BasePage from "./BasePage"

class ListingPage extends BasePage {
    constructor() {
        super()
        this.tierOneDisplay        = () => cy.get('select.merInputNode').eq(0).find('option:selected')
        this.tierTwoDisplay        = () => cy.get('select.merInputNode').eq(1).find('option:selected')
        this.tierThreeDisplay      = () => cy.get('.merCheckboxLabel').find('input[type="checkbox"][aria-checked="true"]').parent().find('span.merText')
    }
}

export default ListingPage