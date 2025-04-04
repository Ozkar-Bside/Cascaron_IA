// features/support/hooks.ts
import { Before, After } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { CustomWorld } from './world';
import * as fs from 'fs';

Before(async function (this: CustomWorld) {
  // Lanzamos el browser y activamos recordVideo
  this.browser = await chromium.launch({ headless: true });
  const context = await this.browser.newContext({
    recordVideo: {
      dir: 'videos/', // Carpeta donde se guardarán los .webm
      size: { width: 1280, height: 720 }
    }
  });

  this.page = await context.newPage();
});

// Al terminar el escenario, cerramos la página y el browser.
// Luego adjuntamos el video (UN solo archivo).
After(async function (this: CustomWorld) {
  // 1) Cerramos la página para que se genere el video
  await this.page?.close();

  // 2) Si se grabó video, lo leemos y lo adjuntamos
  if (this.page?.video) {
    const videoPath = await this.page.video()?.path();
    if (videoPath) {
      const videoBuffer = fs.readFileSync(videoPath);
      // Usa 'video/webm', ya que Playwright genera .webm
      if (this.attach) {
        await this.attach(videoBuffer, 'video/webm');
      }
    }
  }

  // 3) Cerramos el browser
  await this.browser?.close();
});
