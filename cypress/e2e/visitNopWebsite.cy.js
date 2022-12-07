describe('Validate nop home page', () => {
  it('visit nop home page', () => {
    cy.viewport(1200, 800)
    cy.visit('https://demo.nopcommerce.com/')
    cy.title().should('include', 'nopCommerce demo store')
  })
})