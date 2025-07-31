## 🔐 Cypress Login and Game Interaction Tests

This section documents how Cypress is used to test login functionality, error handling, and game interaction for the Sudoku web application.

---

### ❌ Invalid Login Test

This test checks how the app handles login attempts with incorrect credentials.

- `cy.get()` and `cy.type()` are used to input login data.
- `.submit()` is called on the form directly (instead of clicking a button).
- `cy.on('window:alert')` listens for an alert and verifies that it shows the message `"Incorrect Login"`.

<div align="center">
  <img width="500" height="974" alt="Invalid login test" src="https://github.com/user-attachments/assets/4cd6f2ca-421e-48e4-afee-9b14b8f5a64f" />
</div>

---

### ✅ Simulating a Successful Login

To simulate a valid login:

- Cypress uses `cy.window().then(...)` to store user data in `localStorage` using `setItem()` and `JSON.stringify()`.
- The page is reloaded using `cy.reload()`, triggering automatic login via stored data.

<div align="center">
  <img width="600" height="573" alt="Successful login simulation" src="https://github.com/user-attachments/assets/98d7c719-af38-4db6-af3d-e62d6c30a4ed" />
</div>

---

### ⚠️ Invalid Login – Alert Verification

This test ensures that an alert appears when incorrect credentials are used, and the form is submitted programmatically.

- Listens to the `window:alert` event using `cy.on(...)`.
- Verifies the message text using `expect(msg).to.include('Incorrect Login')`.
- Submits the form directly with `cy.get('#login form').submit()`.

<div align="center">
  <img width="500" height="227" alt="Alert message test" src="https://github.com/user-attachments/assets/02894862-0bc0-41c2-b16e-1d27b0bfc0ee" />
</div>

---

### 🧪 Sign In Form Behavior

This test demonstrates how Cypress handles alert dialogs and validates error messages.

- `cy.on('window:alert', (msg) => { ... })` listens for browser alerts.
- `expect(msg).to.include('Incorrect Login')` confirms the correct error message is shown.
- Login form is submitted without pressing a button, using `cy.get('#login form').submit()`.

<div align="center">
  <img width="600" height="746" alt="Sign in alert behavior" src="https://github.com/user-attachments/assets/fadcd31d-0c3f-4d68-9ea4-59219c7924fc" />
</div>

---

### 🧭 Navigation and Game Interaction

This test verifies the full user journey after login, including game interaction.

- Login form is accessed via `cy.contains('Sign In').click()`.
- Email and password are entered using `cy.get('#loginEmail')` and `cy.get('#loginPassword')`.
- Fields are cleared with `.clear()` before typing new data.
- Form is submitted using `.submit()`.

**Gameplay interactions:**

- Cells are clicked and numbers entered using `.click().type('4')`.
- Clicking the **"Facit"** button is verified with `cy.contains('Facit').click()`.
- Section navigation is tested by clicking buttons and checking that views change correctly.

<div align="center">
  <img width="500" height="761" alt="Navigation and game interaction" src="https://github.com/user-attachments/assets/2e87efab-13aa-42e0-a1c1-1a571670268e" />
</div>

---
