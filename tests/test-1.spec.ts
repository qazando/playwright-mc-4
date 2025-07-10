import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //GERAR APPOLICE
  //ABRE O SITE
  await page.goto('https://automationpratice.com.br/');
  //Clica no link "Login"
  await page.getByRole('link', { name: ' Login' }).click();
  //Preenche o campo de usuário
  await page.locator('#user').click();
  //Preenche o campo de senha
  await page.locator('#user').fill('teste@gmail.com');
  //Preenche o campo de senha
  await page.locator('#password').fill('123456');
  //Clica no botão "login"
  await page.getByRole('button', { name: 'login' }).click();
  //Clica no botão "OK" (alerta de confirmação, por exemplo)
  await page.getByRole('button', { name: 'OK' }).click();

});