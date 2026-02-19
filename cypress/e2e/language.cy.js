import app from "../pages/AppPage";
import map from "../pages/MapPage";

describe("Unifly - Map page", () => {
  beforeEach(() => {
    app.open();
    cy.url().should("include", "unifly");
  });

it('should select Deutsch and update UI', () => {
    map.interceptLanguageChange()
    map.dropdownIndicator.should('be.visible').click()
    map.dropdownMenu.should('be.visible')
    map.selectLanguage()
    map.verifyLanguageChangeResponse()
    map.verifyGermanUI() 

 })
});