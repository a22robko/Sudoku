## Tester i Cypress

✅ Felaktig registrering (ogiltig e-post – input blir röd)  
✅ Felaktig inloggning visar alert ("Incorrect Login")  
✅ Korrekt inloggning ger tillgång till spelet  
✅ Sudoku-spel går att interagera med (skriva in siffror)  
✅ Facit-knapp visar korrekt sektion  
✅ Navigation mellan sektioner fungerar  
✅ Utloggning återställer till "To play Sudoku, sign in"

// Testar felaktig inloggning
cy.contains('Log In').click();
cy.get('#loginEmail').type('fel@mejl.se');
cy.get('#loginPassword').type('felkod');

cy.on('window:alert', (msg) => {
  expect(msg).to.include('Incorrect Login');
});

cy.get('#login form').submit();
js
Copy
Edit

// Testar att spela Sudoku och visa facit
cy.get('[onclick="navigate(\'sudoku\')"]').click();
cy.get('#sudoku').should('have.class', 'active');

cy.get('input.sudoku-cell:not(.prefilled):not([disabled])').eq(0).click().type('4');
cy.contains('Facit').click();
cy.get('#facit').should('have.class', 'active');
<img width="600" height="573" alt="image" src="https://github.com/user-attachments/assets/98d7c719-af38-4db6-af3d-e62d6c30a4ed" />
<img width="600" height="746" alt="image" src="https://github.com/user-attachments/assets/fadcd31d-0c3f-4d68-9ea4-59219c7924fc" />
<img width="400" height="761" alt="image" src="https://github.com/user-attachments/assets/2e87efab-13aa-42e0-a1c1-1a571670268e" />

