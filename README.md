## Tester i Cypress

✅ Felaktig registrering (ogiltig e-post – input blir röd)  
✅ Felaktig inloggning visar alert ("Incorrect Login")  
✅ Korrekt inloggning ger tillgång till spelet  
✅ Sudoku-spel går att interagera med (skriva in siffror)  
✅ Facit-knapp visar korrekt sektion  
✅ Navigation mellan sektioner fungerar  
✅ Utloggning återställer till "To play Sudoku, sign in"

Testet börjar med att kontrollera hur sidan hanterar felaktig inloggning.
Cypress använder cy.get() och .type() för att fylla i felaktiga uppgifter i formuläret, och .submit() för att skicka formuläret.
cy.on('window:alert') lyssnar på felmeddelandet som ska visas – "Incorrect Login" – om något är fel.

För att sedan testa korrekt inloggning används cy.window().then(...) för att lägga till en testanvändare direkt i localStorage med setItem() och JSON.stringify().
Efter cy.reload() laddas sidan om, och användaren kan logga in.
<div align="center">
<img width="500" height="974" alt="image" src="https://github.com/user-attachments/assets/4cd6f2ca-421e-48e4-afee-9b14b8f5a64f" />
</div>

<div align="center">
  <img width="600" height="573" alt="image" src="https://github.com/user-attachments/assets/98d7c719-af38-4db6-af3d-e62d6c30a4ed" />
</div>

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
### ⚠️ Test av felaktig inloggning med alert och formulärinlämning

Det här testet kontrollerar att ett `alert`-meddelande visas när en användare försöker logga in med felaktiga uppgifter.  
Cypress lyssnar på `window:alert` och verifierar att meddelandet innehåller texten **"Incorrect Login"**.

Formuläret skickas direkt med `.submit()`, utan att klicka på en knapp – vilket visar att du förstår hur formulär fungerar bakom kulisserna i DOM:en.

<div align="center">
  <img width="500" height="227" alt="image" src="https://github.com/user-attachments/assets/02894862-0bc0-41c2-b16e-1d27b0bfc0ee" />
</div>-1d27b0bfc0ee" /> </div>


<div align="center">
  <img width="600" height="746" alt="image" src="https://github.com/user-attachments/assets/fadcd31d-0c3f-4d68-9ea4-59219c7924fc" />
</div>

<br/>


<div align="center">
  <img width="500" height="761" alt="image" src="https://github.com/user-attachments/assets/2e87efab-13aa-42e0-a1c1-1a571670268e" />
</div>

// Testar att spela Sudoku och visa facit
cy.get('[onclick="navigate(\'sudoku\')"]').click();
cy.get('#sudoku').should('have.class', 'active');

cy.get('input.sudoku-cell:not(.prefilled):not([disabled])').eq(0).click().type('4');
cy.contains('Facit').click();
cy.get('#facit').should('have.class', 'active');





