class MapPage {

  // =========
  // Selectors
  // =========

 get locationInput() {
    return cy.get('[data-test="locationSearch.input"]')
  }

  get dropdownIndicator() {
    return cy.get('.rs-select__dropdown-indicator')
  }
  get dropdownMenu() {
    return cy.get('.rs-select__menu')
  }

  // ==========
  // Intercepts
  // ==========

  interceptLanguageChange() {
    cy.intercept('GET', '**/components.json**').as('languageChange')
  }
  interceptLocationSearch() {
    cy.intercept('GET', '**/api/map/locations*').as('locationSearch')
  }

  // =======
  // Actions
  // =======

  openDropdown() {
    this.dropdownIndicator.should('be.visible').click()
    this.dropdownMenu.should('be.visible')
  }
  selectLanguage() {
    cy.get('.rs-select__menu').contains('Deutsch').click()
  }
   searchLocation(city) {
    cy.get('[data-test="locationSearch.input"]')
      .should('be.visible')
      .click({ force: true })
      .type(city, { force: true })
  }
  selectFirstSuggestion() {
    cy.get('.rs-select__menu').should('be.visible')
    cy.get('.rs-select__option:not(.rs-select__option--is-disabled)')
      .first().click()
  }

  // ==========
  // Assertions
  // ==========

  verifyLanguageChangeResponse() {
    cy.wait('@languageChange').then((interception) => {
      expect(interception.response.statusCode).to.equal(200)
    })
  }
  verifySearchPlaceholder() {
    cy.get('#react-select-3-placeholder')
      .should('be.visible')
      .and('contain.text', 'Adresse')
      .and('contain.text', 'suchen')
  }
  verifyGermanUI() {
    this.verifySearchPlaceholder()
    cy.contains('Hilfe').should('be.visible')
    cy.contains('Kontaktinfo').should('be.visible')
    cy.get('.rs-select__single-value').should('contain.text', 'Deutsch')
  }

  verifySelectedLocation(city) {
    cy.get('.rs-select__single-value')
      .should('be.visible')
      .and('contain.text', city)
  }
  verifyLocationCoordinates() {
    cy.wait('@locationSearch').then(({ response }) => {
      expect(response?.statusCode).to.eq(200)

      const body = response.body
      expect(body).to.be.an('array').and.to.have.length.greaterThan(0)

      const parisFrance = body.find((x) =>
      (x.name || '').includes('Paris') &&
      (x.name || '').includes('France')
  )

      expect(parisFrance, 'Paris France result').to.exist

      expect(parisFrance.position.latitude).to.be.closeTo(48.84, 0.5)
      expect(parisFrance.position.longitude).to.be.closeTo(2.45, 0.5)
  })
  }
}

export default new MapPage()