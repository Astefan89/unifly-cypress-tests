class AppPage {
  open() {
    cy.visit("/")
    this.waitUntilLoaded()
  }

  waitUntilLoaded() {
    cy.get("body").should("be.visible")
    cy.get("input", { timeout: 60000 }).first().should("be.visible")
  }
}

export default new AppPage()
