import { test, expect } from '@playwright/test';

test('Register (invalid), log in, play Sudoku, show solution, log out', async ({ page }) => {
  await page.goto('https://a22robko.github.io/Sudoku/');

  await page.click('text=Sign In');
  await page.fill('#email', 'hbwkfwjnlwo');

  await page.evaluate(() => {
    localStorage.setItem('registeredUser', JSON.stringify({
      email: 'a22robko@student.his.se',
      password: '12345'
    }));
  });

  await page.reload();

  await page.click('text=Log In');
  await page.fill('#loginEmail', 'fel@mejl.se');
  await page.fill('#loginPassword', 'felkod');

  page.on('dialog', async dialog => {
    expect(dialog.message()).toContain('Incorrect Login');
    await dialog.dismiss();
  });

  await page.click('#login button[type="submit"]');

  await page.fill('#loginEmail', 'a22robko@student.his.se');
  await page.fill('#loginPassword', '12345');
  await page.click('#login button[type="submit"]');

  await page.click('text=Sudoku');
  await expect(page.locator('#sudoku')).toHaveClass(/active/);
  await page.waitForTimeout(500);

  const cells = await page.$$('input.sudoku-cell:not(.prefilled):not([disabled])');
  if (cells.length >= 3) {
    await cells[0].fill('4');
    await cells[1].fill('7');
    await cells[2].fill('9');
  }

  await page.click('text=Facit');
  await expect(page.locator('#facit')).toHaveClass(/active/);

  await page.click('text=Sudoku');
  await expect(page.locator('#sudoku')).toHaveClass(/active/);

  await page.click('text=Facit');
  await expect(page.locator('#facit')).toHaveClass(/active/);

  await page.click('text=logout');
  await page.click('#logout > button');
  await expect(page.locator('text=To play Sudoku, sign in')).toBeVisible();
});
