describe('App E2E', () => {
  it('should have a App Component', () => {
    cy.visit('/');

    cy.get('span')
      .should('have.text', 'Pinaki');
  });

  it('should Home Component', () => {
    cy.visit('/');
    cy.get('div[id="sarada"]')
       .should('have.text','Sarada1')
    // cy.get('p')
    //   .should('have.text', '0');

    // cy.contains('Increment').click();
    // cy.get('p')
    //   .should('have.text', '1');

    // cy.contains('Increment').click();
    // cy.get('p')
    //   .should('have.text', '2');

    // cy.contains('Decrement').click();
    // cy.get('p')
    //   .should('have.text', '1');
  });
});