import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { createMask } from '@ngneat/input-mask';
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
    const Kullanici = JSON.parse(localStorage.getItem('Kullanici') || '{}');
    if (typeof Kullanici.Token == 'string') {
      this.router.navigateByUrl('/stok');
    }
  }

  phoneInputMask = createMask({ alias: '(999) 999-9999' });

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
    if (
      ('' + this.formData['Ad'].trim()).length < 3 ||
      ('' + this.formData['Soyad'].trim()).length < 3 ||
      ('' + this.formData['Telefon'].trim()).length < 3 ||
      ('' + this.formData['KullaniciAdi'].trim()).length < 3 ||
      ('' + this.formData['Sifre'].trim()).length < 3
    ) {
      alert('Lütfen tüm alanları doldurun.');
      return;
    }
    const Kullanici = await this.kullaniciService.Kayit(
      this.formData['Ad'],
      this.formData['Soyad'],
      this.formData['Telefon'],
      this.formData['KullaniciAdi'],
      this.formData['Sifre']
    );
    if (typeof Kullanici.Token == 'string') {
      localStorage.setItem('Kullanici', JSON.stringify(Kullanici));
      this.router.navigateByUrl('/stok');
    }
  }

  GoGiris() {
    this.router.navigateByUrl('/');
  }
}
