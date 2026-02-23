import app from '../pages/AppPage';
import map from '../pages/MapPage';

describe('Unifly - Map page', () => {
    
  beforeEach(() => {
    // Arrange: open app before each test
    app.open()

    // Basic smoke check that we are on the right app
    cy.url().should('include', 'unifly')
  });

it('should search Paris and select correct location', () => {

    // Arrange
    map.interceptLocationSearch()  

    // Act
    map.searchLocation('Paris')  
    map.selectFirstSuggestion()

    // Assert
    map.verifySelectedLocation('Paris')
    map.verifyLocationCoordinates()

   })
});