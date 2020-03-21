import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();

  // disable console in production
  const console = (window.console || {}) as Console;
  for (const consoleKey in console) {
    if (!!consoleKey && consoleKey !== 'error') {
      console[consoleKey] = () => {
      };
    }
  }
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
