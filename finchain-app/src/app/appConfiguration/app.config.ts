import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routeConfig } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

const appConfig: ApplicationConfig = {
  providers: [provideRouter(routeConfig), provideHttpClient()]

}
export { appConfig };
