describe('Register and log in', () => {
  it('registers (fails), logs in, plays Sudoku and logs out to Home', () => {
    cy.visit('https://a22robko.github.io/Sudoku/');

    // Try to register with invalid email
    cy.contains('Sign In').click();
    cy.get('#email').type('hbwkfwjnlwo');

    // Set valid user directly in localStorage
    cy.window().then(win => {
      win.localStorage.setItem(
        'registeredUser',
        JSON.stringify({ email: 'a22robko@student.his.se', password: '12345' })
      );
    });

    cy.reload();

    // Try invalid login
    cy.contains('Log In').click();
    cy.get('#loginEmail').type('fel@mejl.se');
    cy.get('#loginPassword').type('felkod');

    cy.on('window:alert', (msg) => {
      expect(msg).to.include('Incorrect Login');
    });

    cy.get('#login form').submit();

    // Try valid login
    cy.get('#loginEmail').clear().type('a22robko@student.his.se');
    cy.get('#loginPassword').clear().type('12345');
    Cypress.on('uncaught:exception', () => false);
    cy.get('#login form').submit();

    // Verify user-only menu is shown
    cy.get('#nav-auth-only', { timeout: 5000 }).should('be.visible');

    // Open Sudoku
    cy.get('[onclick="navigate(\'sudoku\')"]').should('be.visible').click();
    cy.get('#sudoku').should('have.class', 'active');
    cy.wait(500);

    // Fill in some numbers
    cy.get('input.sudoku-cell:not(.prefilled):not([disabled])').eq(0).click().type('4');
    cy.get('input.sudoku-cell:not(.prefilled):not([disabled])').eq(1).click().type('7');
    cy.get('input.sudoku-cell:not(.prefilled):not([disabled])').eq(2).click().type('9');

    // Show solution
    cy.contains('Facit').click();
    cy.get('#facit').should('have.class', 'active');

    // Switch back to Sudoku
    cy.contains('Sudoku').click();
    cy.get('#sudoku').should('have.class', 'active');

    // Show solution again
    cy.contains('Facit').click();
    cy.get('#facit').should('have.class', 'active');

    // Log out to home
    cy.contains('logout').click();
    cy.get('#logout > button').should('be.visible').click();
    cy.contains('To play Sudoku, sign in').should('be.visible');
  });
});
