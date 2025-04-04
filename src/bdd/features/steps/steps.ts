// src/bdd/features/steps/steps.ts
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
// Importa el CustomWorld desde la carpeta support
import { CustomWorld } from './support/world';

Given('el usuario se encuentra en la página de login', async function (this: CustomWorld) {
  console.log("Ejecutando Given: el usuario se encuentra en la página de login");
  await this.page?.goto('https://the-internet.herokuapp.com/login');
  
  // Toma y adjunta captura de pantalla
  const screenshot = await this.page?.screenshot();
  if (screenshot && this.attach) {
    await this.attach(screenshot, 'image/png');
    await this.attach("Given ejecutado", "text/plain");
  }
});

When('ingresa el usuario {string} y la contraseña {string}', async function (this: CustomWorld, usuario: string, clave: string) {
  console.log(`Ejecutando When: ingresando usuario ${usuario} y contraseña`);
  await this.page?.fill('#username', usuario);
  await this.page?.fill('#password', clave);
  await this.page?.click('button[type="submit"]');
  
  // Toma y adjunta captura de pantalla
  const screenshot = await this.page?.screenshot();
  if (screenshot && this.attach) {
    await this.attach(screenshot, 'image/png');
    await this.attach("When ejecutado", "text/plain");
  }
});

Then('se muestra el mensaje {string}', async function (this: CustomWorld, mensajeEsperado: string) {
  console.log(`Ejecutando Then: validando que el mensaje contenga "${mensajeEsperado}"`);
  const texto = await this.page?.textContent('#flash');
  expect(texto).to.include(mensajeEsperado);
  
  // Toma y adjunta captura de pantalla
  const screenshot = await this.page?.screenshot();
  if (screenshot && this.attach) {
    await this.attach(screenshot, 'image/png');
    await this.attach("Then ejecutado", "text/plain");
  }
});
