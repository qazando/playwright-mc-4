import { test, expect } from '@playwright/test';
const { abrirSite, digitarEmail, digitarSenha, clicarEmLogin, validarLogin, realizarLogin, realizarLogin2, digitarEmailV2, digitarSenhaV2, validarLoginV2 } = require('./page-login');
const { usuarioValido, usuarioSemEmail, usuarioSemSenha } = require('./usuarios');

test('Cenario 1 - Login', async ({ page }) => {
    await abrirSite(page);
    await digitarEmailV2(page, usuarioValido.email);
    await digitarSenhaV2(page, usuarioValido.senha);
    await clicarEmLogin(page);  
    await validarLoginV2(page, 'Olá, ' +  usuarioValido.email);
});