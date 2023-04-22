import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  token = '';
  constructor(private router: Router) {
    this.token = localStorage.getItem('token') || '';
  }
  Cikis() {
    this.token = '';
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }
}
