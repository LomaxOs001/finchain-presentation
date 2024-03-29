import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './appConfig/app.config';
import { HomeComponent } from './home-component/home.component';

bootstrapApplication(HomeComponent, appConfig)
  .catch((err) => console.error(err));
