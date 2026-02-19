import app from "../pages/AppPage";
import map from "../pages/MapPage";

describe("Unifly - Map page", () => {

  beforeEach(() => {
    // Arrange: open app before each test
    app.open();

     // Basic smoke check that we are on the right app
    cy.url().should("include", "unifly");
  });

it('should select Deutsch and update UI', () => {

     // Arrange
    map.interceptLanguageChange()
    
    // Act
    map.openDropdown()
    map.selectLanguage()

    // Assert
    map.verifyLanguageChangeResponse()
    map.verifyGermanUI() 

 })
});