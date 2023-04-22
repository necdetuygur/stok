import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  Kullanici: any = {};
  constructor(private router: Router) {
    const Kullanici = JSON.parse(localStorage.getItem('Kullanici') || '{}');
    this.Kullanici = Kullanici;
  }
  Cikis() {
    this.Kullanici = {};
    localStorage.removeItem('Kullanici');
    this.router.navigateByUrl('/');
  }
}
