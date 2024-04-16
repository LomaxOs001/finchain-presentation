import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/accountservices/account.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {
  authzUser: string = '';

  constructor(private as: AccountService) { }

  ngOnInit(): void {
    this.as.getAuthzEmployeeName().subscribe((res) => {
      this.authzUser = res;
    });
  }

  onLogout(): void {
    this.as.logout();
    /*.subscribe({
      next: data => {
        console.log('Logout successful');
      },
      error: err => {
        console.log('Logout failed');
      }
    });*/
  }

}
