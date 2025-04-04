import { test, expect } from '@playwright/test';
import { setRPName, logStep } from '../../utils/reportportal.utils';

test('Prueba de Login', async ({ page }, testInfo) => {
  setRPName('Login válido - usuario y contraseña correctos', testInfo);

  await logStep(testInfo, 'Paso 1: Página de login', page, async () => {
    await page.goto('https://the-internet.herokuapp.com/login');
  });

  await logStep(testInfo, 'Paso 2: Usuario ingresado', page, async () => {
    await page.fill('#username', 'tomsmith');
  });

  await logStep(testInfo, 'Paso 3: Contraseña ingresada', page, async () => {
    await page.fill('#password', 'SuperSecretPassword!');
  });

  await logStep(testInfo, 'Paso 4: Se hace clic en el botón de login', page, async () => {
    await page.click('button[type="submit"]');
  });

  await logStep(testInfo, 'Paso 5: Validar mensaje de éxito', page, async () => {
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
  });
});
