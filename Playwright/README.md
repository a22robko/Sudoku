Here is a complete step-by-step overview of the test execution using **Playwright**.

---

### ✅ Test View in Visual Studio Code

<img width="976" height="547" alt="VS Code Test Explorer" src="https://github.com/user-attachments/assets/ff2543b4-84f9-449b-ac6c-57e789e0bb70" />

The test is executed via the **Test Explorer** in VS Code and shows as passed (green).  
The test name is:  
`Register (invalid), log in, play Sudoku, show solution, log out`.

---

### 💻 Terminal Output – `npx playwright test`

<img width="676" height="401" alt="Terminal Output" src="https://github.com/user-attachments/assets/bc9b35c1-8c5c-400a-b1d1-53c507fcca35" />

The output shows the test was run in **headless mode** using Chromium.  
- 1 test file  
- 1 test case  
- All steps passed ✅

---

### 🎮 Sudoku Game View During Test

<img width="1287" height="776" alt="Sudoku UI during test" src="https://github.com/user-attachments/assets/ceca98b3-414f-4272-b039-180d4c05d151" />

This screenshot shows the user interacting with the game during test execution.  
The Sudoku cells are automatically filled, and the **"Facit"** button is used to display the correct solution.

---

### 🧪 CLI Report During Live Test

<img width="567" height="1491" alt="Playwright CLI full report" src="https://github.com/user-attachments/assets/3aded63e-1f09-4d54-af42-6dfdbdff06e0" />

This screenshot shows what the **live terminal output** looks like when running the test with Playwright.  
You can follow each step in real-time, including:
- 🕒 Start time and total duration  
- 📂 Test file being executed  
- 🌐 Browser used (e.g., Chromium)  
- ✅ Pass/fail status  
- 📊 Report generation via `blob-report`
