import { Routes } from '@angular/router';
import { AppRootComponent } from '../app-root/app-root.component';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';
import { DataManagementComponent } from '../datamanagement.component/data.management.component';
import { LogoutComponent } from '../logout/logout.component';

const routeConfig: Routes = [
    { path: '', pathMatch: 'full', component: AppRootComponent, title: 'Home' },
    { path: 'api/register', component: RegistrationComponent, title: 'Register Employee' },
    { path: 'api/login', component: LoginComponent, title: 'Login Employee' },
    { path: 'api/datamanager', component: DataManagementComponent, title: 'Data Manager' }
    //{ path: 'api/logout', component: LogoutComponent, title: 'Logout Employee' }
];

export { routeConfig };
