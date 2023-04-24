import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KullaniciService } from 'src/app/services/kullanici.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent {
  constructor(
    public kullaniciService: KullaniciService,
    public router: Router
  ) {}
}
