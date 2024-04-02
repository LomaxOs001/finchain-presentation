import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/appConfiguration/app.config';
import { HomeComponent } from './app/home/home.component';

bootstrapApplication(HomeComponent, appConfig)
  .catch((err) => console.error(err));
