# 🔍 Automatiserade tester av min Sudoku-applikation

Det här projektet visar hur jag testat en webbaserad Sudoku webbsida med Cypress  
🔗 Live: [https://a22robko.github.io/Sudoku/](https://a22robko.github.io/Sudoku/)

---

## ✅ Vad som testas

- Felaktig registrering där ogiltig e-post gör input-fältet rött  
- Felaktig inloggning triggar ett alert-meddelande med texten *Incorrect Login*  
- Korrekt inloggning ger tillgång till spelet  
- Det går att fylla i siffror i spelets tomma rutor  
- Facit-knappen visar rätt lösning och byter sektion  
- Navigering mellan sidor fungerar  
- Utloggning återställer sidan och visar *To play Sudoku, sign in*
Testet börjar med att kontrollera hur sidan hanterar felaktig inloggning.
Cypress använder cy.get() och .type() för att fylla i felaktiga uppgifter i formuläret, och .submit() för att skicka formuläret.
cy.on('window:alert') lyssnar på felmeddelandet som ska visas – "Incorrect Login" – om något är fel.

<br/>
### ❌ Felaktig inloggning

Det första testet kontrollerar hur sidan hanterar inloggning med ogiltiga uppgifter.  
Cypress använder `.get()` och `.type()` för att fylla i formuläret, och `.submit()` för att skicka det.  
`cy.on('window:alert')` lyssnar efter ett felmeddelande som innehåller texten `"Incorrect Login"`..
<div align="center">
<img width="500" height="974" alt="image" src="https://github.com/user-attachments/assets/4cd6f2ca-421e-48e4-afee-9b14b8f5a64f" />
</div>

<br/>

### ✅ Korrekt inloggning via localStorage

För att simulera en lyckad inloggning används `cy.window().then(...)` för att skriva användardata till `localStorage` via `setItem()` och `JSON.stringify()`.  
Därefter används `cy.reload()` för att ladda om sidan så att användaren automatiskt loggas in.
<div align="center">
  <img width="600" height="573" alt="image" src="https://github.com/user-attachments/assets/98d7c719-af38-4db6-af3d-e62d6c30a4ed" />
</div>


<br/>

⚠️ Test av felaktig inloggning med alert och formulärinlämning
Det här testet kontrollerar att ett alert-meddelande visas när en användare försöker logga in med felaktiga uppgifter.
Cypress lyssnar på window:alert och kontrollerar att meddelandet innehåller exakt texten "Incorrect Login". Formuläret skickas direkt med `.submit()` – utan att klicka på någon knapp.

<div align="center"> <img width="500" height="227" alt="image" src="https://github.com/user-attachments/assets/02894862-0bc0-41c2-b16e-1d27b0bfc0ee" /> </div>
`cy.on('window:alert', (msg) => { ... })` lyssnar efter om ett alert-meddelande visas.
`expect(msg).to.include('Incorrect Login')` kontrollerar att meddelandet innehåller exakt texten "Incorrect Login".
`cy.get('#login form').submit()` skickar formuläret direkt – utan att behöva klicka på en knapp.
Detta visar att du kan hantera alert-dialoger och verifiera meddelanden som visas när användaren gör något fel.

<div align="center"> <img width="600" height="746" alt="image" src="https://github.com/user-attachments/assets/fadcd31d-0c3f-4d68-9ea4-59219c7924fc" /> </div> <br/>

<br/>
🔄 Navigering och interaktion
Testet använder `cy.contains('Sign In').click()` för att öppna inloggningsrutan.
Formulärfälten fylls i med `cy.get('#loginEmail').type(...)` och `cy.get('#loginPassword').type(...)`, och skickas sedan med `.submit()` istället för att klicka på en knapp.
Metoden `.clear()` används för att tömma fält innan ny data skrivs in.

När spelet visas testas interaktionen genom att klicka och skriva siffror i rutorna med `.click().type('4')`.
Klick på knappen "Facit" verifieras med `cy.contains('Facit').click()`.
Alla sidbyten testas med `.click()` för att kontrollera navigation mellan sektionerna.

<div align="center"> <img width="500" height="761" alt="image" src="https://github.com/user-attachments/assets/2e87efab-13aa-42e0-a1c1-1a571670268e" /> </div>



