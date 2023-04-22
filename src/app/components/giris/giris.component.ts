import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KullaniciService } from 'src/app/services/kullanici.service';

@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.css'],
})
export class GirisComponent {
  constructor(
    private kullaniciService: KullaniciService,
    private router: Router
  ) {
    const Kullanici = JSON.parse(localStorage.getItem('Kullanici') || '{}');
    if (typeof Kullanici.Token == 'string') {
      this.router.navigateByUrl('/stok');
    }
  }
  formData: { [key: string]: string } = {
    KullaniciAdi: '',
    Sifre: '',
  };
  HasChange(e: any) {
    this.formData[e.target.name] = '' + e.target.value || '';
  }
  async Giris() {
    const Kullanici = await this.kullaniciService.Giris(
      this.formData['KullaniciAdi'],
      this.formData['Sifre']
    );
    if (typeof Kullanici.Token == 'string') {
      localStorage.setItem('Kullanici', JSON.stringify(Kullanici));
      // this.router.navigateByUrl('/stok');
      window.location.href = '/stok';
    }
  }
  GoKayit() {
    this.router.navigateByUrl('/kayit');
  }
}
