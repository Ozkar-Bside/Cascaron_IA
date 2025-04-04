// features/support/world.ts
import { setWorldConstructor, IWorldOptions, World } from '@cucumber/cucumber';
import { Browser, Page } from 'playwright';

export class CustomWorld extends World {
  public browser?: Browser;
  public page?: Page;

  // Si quieres usar "this.attach", ya viene disponible gracias a la clase base "World".
  // Si necesitas pasar opciones en la CLI, las recibes como "options.parameters".
  constructor(options: IWorldOptions) {
    super(options);
  }
}

// Registramos la clase con Cucumber:
setWorldConstructor(CustomWorld);
