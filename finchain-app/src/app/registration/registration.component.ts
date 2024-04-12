import { Component, input } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeAccountTransfer } from '../services/employee/employeeAccountTransfer';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, RouterModule, RouterOutlet], //import a component to add to this component
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  form: any = {
    employeeId: null,
    name: null
  };
  isRegSuccessful = false;
  isRegFailed = false;
  errorMessage = '';

  constructor(private eat: EmployeeAccountTransfer) { }

  onRegister(): void {
    const { employeeId, name } = this.form;

    this.eat.registerEmployee(employeeId, name).subscribe({

      next: data => {
        console.log(data);
        this.isRegSuccessful = true;
        this.isRegFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isRegFailed = true;
        throw new Error('Employee registration failed\n' + err.error.message);
      },

      complete: () => {
        console.log('Employee registration completed');
      }
    });
  }

}
