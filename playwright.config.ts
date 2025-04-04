import { defineConfig } from '@playwright/test';
// 👇 Usamos require para evitar errores de ESM/TS al importar JS
// @ts-ignore
const RPReporter = require('@reportportal/agent-js-playwright');
const rpConfig = require('./reportportal.config.js');

export default defineConfig({
  testDir: './src/ui/tests',
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['@reportportal/agent-js-playwright', rpConfig] // 👈 Aquí usamos el string, no la clase
  ],
  use: {
    headless: true,
    screenshot: 'on',
    video: 'on',
    trace: 'on'
  },
  timeout: 30000,
  retries: 0
});
