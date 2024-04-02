import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  template: '',
  styleUrl: './app-root.component.css'
})
export class AppRootComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
