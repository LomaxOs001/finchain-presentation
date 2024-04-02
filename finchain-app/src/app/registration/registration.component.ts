import { Component } from '@angular/core';
import { HttpClientModule, HttpEventType, HttpResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeAccountTransfer } from '../services/employee/employeeAccountTransfer';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule], //import a component to add to this component
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  employeeID: string = '';
  name: string = '';

  constructor(private eat: EmployeeAccountTransfer) { }

  onRegister(employeeID: string, name: string): void { //moving this function to register-component.ts


    this.eat.registerEmployee(employeeID, name).subscribe({
      next: (event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log('Employee registration in progress...');
        }
        else if (event instanceof HttpResponse) {
          console.log(event.body.message);
        }

      },
      error: (error: any) => {
        console.error('Employee registration failed');

        if (error.status === 404) {
          console.error('Employee registration failed with invalid URL');
        }
        else if (error.status === 401) {
          console.error('Employee registration failed with unauthorized access');
        }

      },

      complete: () => {
        console.log('Employee registration completed');
      }
    });
    console.log(this.eat.registerEmployee(employeeID, name).toString());
    console.log(this.eat.generatePhrase());

  }

}
