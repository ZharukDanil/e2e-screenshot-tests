const { test, expect } = require('@playwright/test');

test('Перевірка заголовка другої сторінки', async ({ page }) => {
  await page.goto('/second.html');
  await expect(page).toHaveTitle(/Друга сторінка/);
});

test('Перевірка наявності заголовка h2', async ({ page }) => {
  await page.goto('/second.html');
  const heading = page.locator('h2');
  await expect(heading).toBeVisible();
  await expect(heading).toHaveText(/Це змінений заголовок/);
});

test('Перевірка переходу за посиланням у новій вкладці', async ({ page }) => {
  await page.goto('/second.html');
  const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('text=Докладніше')
  ]);
  await newPage.waitForLoadState();
  await expect(newPage).toHaveURL(/playwright.dev/);
});
