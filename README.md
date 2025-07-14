### Automated Testing of a Sudoku Web Application

This project demonstrates how I tested a fully functional **Sudoku web application** using **Cypress** and **Node.js**.  
The app includes features such as **Sign Up**, **Log In**, **Log Out**, and a **Solution ("Facit") button** that displays the correct Sudoku answers.

Both the website and all Cypress tests are fully published to GitHub.  
🔗 **Live website:** [https://a22robko.github.io/Sudoku/](https://a22robko.github.io/Sudoku/)

---


### What’s Being Tested

- Invalid registration highlights the input field red if the email is invalid  
- Incorrect login triggers a browser alert with the message `"Incorrect Login"`  
- Correct login gives access to the Sudoku game  
- Users can click and type numbers into the Sudoku grid  
- The **"Facit" button** shows the correct solution  
- Navigation between pages (Home, Sign In, Game, etc.) is fully tested  
- Logging out resets the app and shows *"To play Sudoku, sign in"*

<br/>

### ❌ Invalid Login Test

This test checks how the app handles login attempts with incorrect credentials.  
Cypress uses `.get()` and `.type()` to enter input, and `.submit()` to send the form.  
`cy.on('window:alert')` listens for an alert with the message `"Incorrect Login"`.
<div align="center">
<img width="500" height="974" alt="image" src="https://github.com/user-attachments/assets/4cd6f2ca-421e-48e4-afee-9b14b8f5a64f" />
</div>

<br/>

### To simulate a successful login, 

Cypress uses `cy.window().then(...)` to store user data in `localStorage` using `setItem()` and `JSON.stringify()`.  
Then, `cy.reload()` is called to reload the page and automatically log the user in.
'
<div align="center">
  <img width="600" height="573" alt="image" src="https://github.com/user-attachments/assets/98d7c719-af38-4db6-af3d-e62d6c30a4ed" />
</div>


<br/>


### ⚠️ Invalid Login with Alert and Form Submission

This test verifies that an `alert` message appears when a user attempts to log in with incorrect credentials.  
Cypress listens to the `window:alert` event and checks that the message contains the exact text `"Incorrect Login"`.  
The form is submitted directly using `.submit()` without clicking any button.

<div align="center"> <img width="500" height="227" alt="image" src="https://github.com/user-attachments/assets/02894862-0bc0-41c2-b16e-1d27b0bfc0ee" /> </div>

### 🔐 Sign In Form Behavior

`cy.on('window:alert', (msg) => { ... })` listens for any alert messages triggered by the browser.  
`expect(msg).to.include('Incorrect Login')` verifies that the alert contains the exact message `"Incorrect Login"`.  
The form is submitted directly using `cy.get('#login form').submit()` — without clicking a button.

This test demonstrates how Cypress can handle alert dialogs and validate error messages shown to the user.

<div align="center"> <img width="600" height="746" alt="image" src="https://github.com/user-attachments/assets/fadcd31d-0c3f-4d68-9ea4-59219c7924fc" /> </div>

<br/>

### 🎯 Navigation and Game Interaction

The test uses `cy.contains('Sign In').click()` to open the login form.  
The form fields are filled in using `cy.get('#loginEmail').type(...)` and `cy.get('#loginPassword').type(...)`, and submitted with `.submit()` instead of clicking a button.  
The `.clear()` method is used to empty the fields before entering new data.

Once the game is displayed, interaction is tested by clicking on cells and typing numbers using `.click().type('4')`.  
Clicking the **"Facit"** button is verified with `cy.contains('Facit').click()`.  
All page switches (section navigation) are tested using `.click()` to ensure correct behavior across the app.

<div align="center"> <img width="500" height="761" alt="image" src="https://github.com/user-attachments/assets/2e87efab-13aa-42e0-a1c1-1a571670268e" /> </div>



