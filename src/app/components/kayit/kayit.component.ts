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
  ) {}
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
    console.log(token);
    if (typeof token == 'string') {
      localStorage.setItem('token', token);
      this.router.navigateByUrl('/stok');
    }
  }
  GoGiris() {
    this.router.navigateByUrl('/');
  }
}
