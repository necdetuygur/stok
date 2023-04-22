import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KullaniciService } from 'src/app/services/kullanici.service';

@Component({
  selector: 'app-kullanici',
  templateUrl: './kullanici.component.html',
  styleUrls: ['./kullanici.component.css'],
})
export class KullaniciComponent {
  list: any;
  constructor(
    public kullaniciService: KullaniciService,
    private router: Router
  ) {
    const Kullanici = JSON.parse(localStorage.getItem('Kullanici') || '{}');
    if (typeof Kullanici.Token == 'string' && Kullanici.Rol != 'Yonetici') {
      this.router.navigateByUrl('/');
    }
  }
  async ngOnInit() {
    this.list = await this.kullaniciService.Tum();
  }
  async YoneticiYap(KullaniciAdi: any) {
    if (!confirm('Emin misiniz?')) return;
    await this.kullaniciService.YoneticiYap(KullaniciAdi);
    this.list = await this.kullaniciService.Tum();
  }
  async KullaniciYap(KullaniciAdi: any) {
    if (!confirm('Emin misiniz?')) return;
    await this.kullaniciService.KullaniciYap(KullaniciAdi);
    this.list = await this.kullaniciService.Tum();
  }
}
