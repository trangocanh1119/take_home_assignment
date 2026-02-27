describe('Rocscience Login Navigation Test', () => {

  beforeEach(() => {
    // Clear browser state before each test
    cy.clearCookies()
    cy.clearLocalStorage()

    // Clear session storage
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })

  })

  it('should navigate to RocPortal login page successfully', () => {

    // Visit Rocscience homepage
    cy.visit('https://rocscience.com')

    // Accept Cookies Policy 
    cy.get('.iubenda-cs-accept-btn', { timeout: 10000 }).should('be.visible').click()

    // Click user/profile icon
    cy.get('#topnav-portal-account-icon').click()

    // Click "Log in to RocPortal"
    cy.contains('Log in to RocPortal').click()

    // Validate URL contains login path
    cy.url().should('include', '/login')

    cy.origin('https://auth.rocscience.com/', () => {

      // Validate login form elements
      cy.get('#username').should('be.visible')
      cy.get('#password').should('be.visible')

      // Validate login button
      cy.contains('button', 'Continue')
        .should('be.visible')
        .and('be.enabled')
    })
  })

})