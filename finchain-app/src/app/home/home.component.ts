import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccountService } from '../services/accountservices/account.service';
import { AuthzComponent } from '../auth/auth.component';
import { LogoutComponent } from '../logout/logout.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, RouterModule, AuthzComponent, LogoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnInit {

  name: string = '';
  isLoggedIn: boolean = false;

  constructor(private as: AccountService) { }

  ngOnInit(): void {
    this.as.isLoggedIn().subscribe((res) => {
      this.isLoggedIn = res;
    });
  }

}
