import { Routes } from '@angular/router';
import { AppRootComponent } from '../app-root/app-root.component';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';
import { UploadComponent } from '../upload/upload.component';

const routeConfig: Routes = [
    { path: '', pathMatch: 'full', component: AppRootComponent, title: 'Home' },
    { path: 'api/register', component: RegistrationComponent, title: 'Register Employee' },
    { path: 'api/login', component: LoginComponent, title: 'Login Employee' },
    { path: 'api/upload', component: UploadComponent, title: 'Upload File' }
];

export { routeConfig };
