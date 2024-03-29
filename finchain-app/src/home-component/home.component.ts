import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule, HttpEventType, HttpResponse } from '@angular/common/http';
import { EmployeeAccountTransfer } from '../services/employee/employeeAccountTransfer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Employees } from '../services/employee/employees';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
  title = 'finchain-app';
  employeeID: string = '';
  name: string = '';

  constructor(private eat: EmployeeAccountTransfer) { }


  onRegister(employeeID: string, name: string): void {

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
