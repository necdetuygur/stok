import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KullaniciService } from 'src/app/services/kullanici.service';

@Component({
  selector: 'app-kayit',
  templateUrl: './kayit.component.html',
  styleUrls: ['./kayit.component.css'],
})
export class KayitComponent {
  constructor(
    private kullaniciService: KullaniciService,
    private router: Router
  ) {
    const token = localStorage.getItem('token');
    if (typeof token == 'string' && token.length > 1) {
      this.router.navigateByUrl('/stok');
    }
  }
  formData: { [key: string]: string } = {
    Ad: '',
    Soyad: '',
    Telefon: '',
    KullaniciAdi: '',
    Sifre: '',
  };
  HasChange(e: any) {
    this.formData[e.target.name] = '' + e.target.value || '';
  }
  async Kayit() {
    const token = await this.kullaniciService.Kayit(
      this.formData['Ad'],
      this.formData['Soyad'],
      this.formData['Telefon'],
      this.formData['KullaniciAdi'],
      this.formData['Sifre']
    );
    if (typeof token == 'string' && token.length > 1) {
      localStorage.setItem('token', token);
      // this.router.navigateByUrl('/stok');
      window.location.href = '/stok';
    }
  }
  GoGiris() {
    this.router.navigateByUrl('/');
  }
}
