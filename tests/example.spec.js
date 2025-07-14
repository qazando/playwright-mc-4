// @ts-check
import { test, expect } from '@playwright/test';

test('Cenario 1 - Login', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Fazendo login na qazando', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  await page.locator('#user').fill('qazando@gmail.com');
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('Olá, qazando@gmail.com')).toBeVisible();
});

test('Fazendo o teste de cadastro', async ({ page }) => {
  await page.goto('/register');
  await page.locator('#user').fill('herbert soares');
  await page.locator('#email').fill('qazando@gmail.com');
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'Cadastrar' }).click();
});