import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from '../services/accountservices/account.service';
import { SessionStorage } from '../services/data/session.storage';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, RouterModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {

  form: any = {
    employeeId: null,
    password: null
  };
  isLogSuccessful = false;
  isLogFailed = false;
  errorMessage = '';

  constructor(private router: Router, private as: AccountService, private session: SessionStorage) { }

  onLogin(): void {
    const { employeeId, password } = this.form;

    this.as.login(employeeId, password).subscribe({
      next: data => {

        console.log(data);

        this.isLogSuccessful = true;
        this.isLogFailed = false;

        this.as.setLoginStatus(true, data.sessionId, data.employee);

        this.router.navigate(['/api/datamanager']);
      },
      error: err => {

        this.errorMessage = err.error.message;
        this.isLogFailed = true;
        console.log('Login failed: ' + err.error.message);
      }
    });
  }
}
