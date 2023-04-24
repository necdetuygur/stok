import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KullaniciService } from 'src/app/services/kullanici.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  DarkMode = (localStorage.getItem('DarkMode') || '0') == '1';

  constructor(
    private router: Router,
    public kullaniciService: KullaniciService
  ) {
    this.DarkSet();
  }
  Cikis() {
    this.kullaniciService.Kullanici = {};
    localStorage.removeItem('Kullanici');
    this.router.navigateByUrl('/');
  }
  DarkToggle() {
    this.DarkMode = !this.DarkMode;
    localStorage.setItem('DarkMode', this.DarkMode ? '1' : '0');
    this.DarkSet();
  }
  DarkSet() {
    setTimeout(() => {
      if (this.DarkMode) {
        document.body.classList.add('dark-mode');
        document.querySelector('#navbar')?.classList.add('navbar-dark');
        document.querySelector('#navbar')?.classList.add('navbar-black');
        document.querySelector('#navbar')?.classList.remove('navbar-light');
        document.querySelector('#navbar')?.classList.remove('navbar-white');
      } else {
        document.body.classList.remove('dark-mode');
        document.querySelector('#navbar')?.classList.add('navbar-light');
        document.querySelector('#navbar')?.classList.add('navbar-white');
        document.querySelector('#navbar')?.classList.remove('navbar-dark');
        document.querySelector('#navbar')?.classList.remove('navbar-black');
      }
    }, 1);
  }
}
