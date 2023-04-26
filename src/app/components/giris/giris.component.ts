import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ENDPOINT } from 'src/app/api.constants';
import { KullaniciService } from 'src/app/services/kullanici.service';

@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.css'],
})
export class GirisComponent {
  formData: { [key: string]: string } = {
    KullaniciAdi: '',
    Sifre: '',
  };
  Host = ENDPOINT;
  Loading = false;
  constructor(
    private kullaniciService: KullaniciService,
    private router: Router
  ) {
    const Kullanici = JSON.parse(localStorage.getItem('Kullanici') || '{}');
    if (typeof Kullanici.Token == 'string') {
      this.router.navigateByUrl('/stok');
    }
  }
  HasChange(e: any) {
    this.formData[e.target.name] = '' + e.target.value || '';
    if (e.target.name == 'Host') {
      this.Host = e.target.value;
      while (this.Host.split('').reverse()[0] == '/') {
        this.Host = this.Host.substring(0, this.Host.length - 1);
      }
      localStorage.setItem('Host', this.Host);
    }
  }
  async Giris() {
    this.Loading = true;

    const Kullanici = await this.kullaniciService.Giris(
      this.formData['KullaniciAdi'],
      this.formData['Sifre']
    );

    if (Kullanici != undefined && typeof Kullanici.Token == 'string') {
      localStorage.setItem('Kullanici', JSON.stringify(Kullanici));
      this.router.navigateByUrl('/stok');
    } else {
      this.Loading = false;
    }
  }
  GoKayit() {
    this.router.navigateByUrl('/kayit');
  }
}
