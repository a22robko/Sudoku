### Automated Testing of a Sudoku Web Application

This project demonstrates how I tested a fully functional **Sudoku web application** using **Cypress** and **Node.js**.  
The app includes features such as **Sign Up**, **Log In**, **Log Out**, and a **Solution ("Facit") button** that displays the correct Sudoku answers.

Both the website and all Cypress tests are fully published to GitHub.  
🔗 **Live website:** [https://a22robko.github.io/Sudoku/](https://a22robko.github.io/Sudoku/)

---
### Tools Used

-  The Sudoku website is built using plain **HTML, CSS, and JavaScript**
-  All tests are written in **JavaScript using Cypress**
-  **Node.js** is only used to run Cypress locally (test runner environment)


### What’s Being Tested

- Invalid registration highlights the input field red if the email is invalid  
- Incorrect login triggers a browser alert with the message `"Incorrect Login"`  
- Correct login gives access to the Sudoku game  
- Users can click and type numbers into the Sudoku grid  
- The **"Facit" button** shows the correct solution  
- Navigation between pages (Home, Sign In, Game, etc.) is fully tested  
- Logging out resets the app and shows *"To play Sudoku, sign in"*



