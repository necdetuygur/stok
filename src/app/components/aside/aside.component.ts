import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { KullaniciService } from 'src/app/services/kullanici.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent {
  CurrentRoute: string;
  constructor(
    public kullaniciService: KullaniciService,
    public router: Router
  ) {
    this.CurrentRoute = '';
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.CurrentRoute = event.url;
      }
    });
  }
}
