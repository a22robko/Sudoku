# Sudoku Web Application – Cypress Test Suite

This project demonstrates automated end-to-end testing of a fully functional **Sudoku web application** using **Cypress**.  
The application supports:

- User Sign Up and Login
- Interactive Sudoku gameplay
- A "Facit" button that displays the correct Sudoku solution

🔗 Live Website: [https://a22robko.github.io/Sudoku/](https://a22robko.github.io/Sudoku/)

---

## 🛠 Tools & Technologies

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Testing**: Cypress (JavaScript-based E2E test framework)
- **Environment**: Node.js (only used to run Cypress locally)

---

## ✅ Features Being Tested

- Email validation (invalid input shows red border)
- Incorrect login shows alert `"Incorrect Login"`
- Successful login grants access to the game
- Users can enter numbers in the Sudoku grid
- "Facit" button reveals the correct solution
- Page navigation (Home, Sign In, Game, etc.)
- Logout resets the app and shows `"To play Sudoku, sign in"`

---

## 🚀 Getting Started

### npm install
```bash
npx cypress open
```
### npm run
```bash
npx cypress open
```
### npm run
```bash
npx cypress run
```
