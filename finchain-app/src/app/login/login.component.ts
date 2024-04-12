import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
    name: null
  };
  isLogSuccessful = false;
  isLogFailed = false;
  errorMessage = '';

}
