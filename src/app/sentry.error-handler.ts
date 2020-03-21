import {ErrorHandler, Injectable} from '@angular/core';
import * as Sentry from '@sentry/browser';

import {environment} from '../environments/environment';


Sentry.init({
  dsn: '__PUBLIC_DSN__',
  release: 'ngx-boiler@', // + environment.version,
  environment: window.location.hostname,
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {
  }

  handleError(error): void {
    if (environment.production) {
      Sentry.captureException(error.originalError || error);
    }
    throw error;
  }
}
