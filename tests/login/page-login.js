const { expect } = require('@playwright/test');

const abrirSite = async (page) => {
  await page.goto('/login');
}

const digitarEmail = async (page) => {
   await page.locator('#user').fill('qazando@gmail.com'); 
}

const digitarEmailV2 = async (page, email) => {
   await page.locator('#user').fill(email); 
}

const digitarSenha = async (page) => {
   await page.locator('#password').fill('123456');
}

const digitarSenhaV2 = async (page, senha) => {
   await page.locator('#password').fill(senha);
}

const clicarEmLogin = async (page) => {
   await page.getByRole('button', { name: 'login' }).click();
}

const validarLogin = async (page) => {
   await expect(page.getByText('Olá, qazando@gmail.com')).toBeVisible();
}

const validarLoginV2 = async (page, texto) => {
   await expect(page.getByText(texto)).toBeVisible();
}

const realizarLogin = async (page) => {
    await abrirSite(page);
    await digitarEmail(page);
    await digitarSenha(page);
    await clicarEmLogin(page);
    await validarLogin(page);
}

const realizarLogin2 = async (page) => {
    await page.locator('#user').fill('qazando@gmail.com'); 
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'login' }).click();
    await expect(page.getByText('Olá, qazando@gmail.com')).toBeVisible();
}

module.exports = {
  abrirSite,
  digitarEmail,
  digitarSenha,
  clicarEmLogin,
  validarLogin,
  realizarLogin,
  realizarLogin2,
  digitarEmailV2,
  digitarSenhaV2,
  validarLoginV2
}