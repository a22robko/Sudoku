Automatiserade tester av min Sudoku-applikation
Det här projektet visar hur jag testat en webbaserad Sudoku-applikation med Cypress
Applikationen är tillgänglig här
➡️ https://a22robko.github.io/Sudoku/

Testerna kontrollerar att följande fungerar som det ska
Felaktig registrering där ogiltig e-post gör input-fältet rött
Felaktig inloggning triggar ett alert-meddelande med texten Incorrect Login
Korrekt inloggning ger tillgång till spelet
Det går att fylla i siffror i spelets tomma rutor
Facit-knappen visar rätt lösning och byter sektion
Navigering mellan sidor (Home, Sign In, Log In) fungerar
Utloggning återställer allt och visar To play Sudoku, sign in
Testerna använder cy.get(), .type(), .click(), .submit() och cy.window() för att interagera med sidan och verifiera funktionalitet via DOM och localStorage

Testet börjar med att kontrollera hur sidan hanterar felaktig inloggning.
Cypress använder cy.get() och .type() för att fylla i felaktiga uppgifter i formuläret, och .submit() för att skicka formuläret.
cy.on('window:alert') lyssnar på felmeddelandet som ska visas – "Incorrect Login" – om något är fel.

För att sedan testa korrekt inloggning används cy.window().then(...) för att lägga till en testanvändare direkt i localStorage med setItem() och JSON.stringify().
Efter cy.reload() laddas sidan om, och användaren kan logga in.
<div align="center">
<img width="500" height="974" alt="image" src="https://github.com/user-attachments/assets/4cd6f2ca-421e-48e4-afee-9b14b8f5a64f" />
</div>
När användaren klickar på länken Sign In i toppmenyn, används Cypress-kommandot cy.contains(...).click() för att simulera ett klick. Det här testet verifierar att sidan navigerar korrekt till inloggningsvyn.  cy.contains('Sign In') letar upp knappen eller länken med exakt den texten. .click() klickar på den för att visa rätt vy. I det här fallet leder klicket till en ruta som säger "Welcome to Sudoku", vilket innebär att cy.get() och click() fungerat som förväntat.
<div align="center">
  <img width="600" height="573" alt="image" src="https://github.com/user-attachments/assets/98d7c719-af38-4db6-af3d-e62d6c30a4ed" />
</div>

### Test av felaktig inloggning med alert och formulärinlämning

Det här testet kontrollerar att ett `alert`-meddelande visas när en användare försöker logga in med felaktiga uppgifter.  
Cypress lyssnar på `window:alert` och verifierar att meddelandet innehåller texten **"Incorrect Login"**.

Formuläret skickas direkt med `.submit()`, utan att klicka på en knapp – vilket visar att du förstår hur formulär fungerar bakom kulisserna i DOM:en.

<div align="center">
  <img width="500" height="227" alt="image" src="https://github.com/user-attachments/assets/02894862-0bc0-41c2-b16e-1d27b0bfc0ee" />
 </div>

cy.on('window:alert', (msg) => { ... }) lyssnar efter om ett alert-meddelande visas
expect(msg).to.include('Incorrect Login') kontrollerar att meddelandet innehåller exakt texten "Incorrect Login". cy.get('#login form').submit() skickar formuläret direkt – utan att behöva klicka på en knapp Detta visar att du kan hantera alert-dialoger och verifiera meddelanden som visas när användaren gör något fel
<div align="center">
  <img width="600" height="746" alt="image" src="https://github.com/user-attachments/assets/fadcd31d-0c3f-4d68-9ea4-59219c7924fc" />
</div>

<br/>

Det här testet kontrollerar vad som händer när en användare försöker logga in med ogiltiga uppgifter – och hur formuläret hanteras därefter. cy.contains('Log In') hittar knappen med texten "Log In"
.click() klickar på knappen så inloggningsformuläret visas
cy.get('#loginEmail') och .type('fel@mejl.se') fyller i ett ogiltigt användarnamn
Samma sak görs med lösenord (#loginPassword)
cy.get('#login form').submit() skickar formuläret direkt – utan att klicka på knappen
Ett alert-meddelande triggas, som testas med cy.on('window:alert', ...). E-postfältet töms med .clear()
Ett nytt försök görs med en giltig e-post: a22robko@student.his.se
<div align="center">
  <img width="500" height="761" alt="image" src="https://github.com/user-attachments/assets/2e87efab-13aa-42e0-a1c1-1a571670268e" />
</div>



