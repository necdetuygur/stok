import { Component } from '@angular/core';
import { KullaniciService } from './services/kullanici.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public kullaniciService: KullaniciService) {}
}
