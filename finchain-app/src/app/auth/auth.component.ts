import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authz',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule,],
  templateUrl: './auth.component.html'
})
export class AuthzComponent {

  constructor() { }

}
