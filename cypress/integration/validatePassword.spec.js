import {cssSelectors} from '../support/selectors'

describe("Validate password genarator", function () {
  beforeEach(() => {
    //Loading the application url before starting each test case
    cy.visit('https://www.dashlane.com/features/password-generator');
  });

  it('Loads the password generator url', function() {
      cy.get(cssSelectors.content).should('exist')
      cy.get(cssSelectors.passwordComponent).should('be.visible')
      cy.get(cssSelectors.passwordComponent).should('have.length',1)
      cy.percySnapshot()
  })

  it('Generates a new password on click Submit', function() {
      cy.get(cssSelectors.submitBtn).click()
      cy.get(cssSelectors.passwordComponent).should('be.visible')
      cy.percySnapshot('Password generator responsive test', {widths: [375, 768, 1280]} )
  })
});
