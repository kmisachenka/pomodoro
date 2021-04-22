describe('[e2e] Pomodoro App', () => {
  it('should works', () => {
    cy.visit('/');
    cy.clock();

    cy.findByText('25:00').should('exist');
    cy.findByText('Start').should('exist');
    cy.findByText('Reset').should('exist');

    cy.findByText('Start').click();
    cy.findByText('Start').should('not.exist');

    cy.tick(1000);
    cy.findByText('24:59').should('exist');

    cy.tick(1000);
    cy.findByText('24:58').should('exist');

    cy.findByText('Stop').should('exist');
    cy.findByText('Stop').click();

    cy.tick(1000);
    cy.findByText('24:58').should('exist');

    cy.tick(1000);
    cy.findByText('24:58').should('exist');

    cy.findByText('Start').click();

    cy.tick(1000);
    cy.findByText('24:57').should('exist');

    cy.findByText('Reset').click();
    cy.findByText('25:00').should('exist');
    cy.findByText('Start').should('exist');
    cy.findByText('Stop').should('not.exist');

    cy.findByLabelText('Toggle Color Mode').should('exist');
    cy.get('body').should('have.class', 'chakra-ui-dark');

    cy.findByLabelText('Toggle Color Mode').click();
    cy.get('body').should('have.class', 'chakra-ui-light');

    cy.findByLabelText('Settings').should('exist');
    cy.findByLabelText('Settings').click();

    cy.findByLabelText('Settings Modal')
      .should('exist')
      .findByRole('radio', { name: /english/i })
      .should('be.checked');

    cy.findByText('Save').should('exist');
    cy.findByText('Close').should('exist');
  });
});

export {};
