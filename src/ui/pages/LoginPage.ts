// src/ui/pages/LoginPage.ts
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {
    if (!page) {
      throw new Error('❌ Page no fue inicializado correctamente');
    }
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('button[type="submit"]');
  }

  async getMessage() {
    return await this.page.locator('#flash').innerText();
  }
}
