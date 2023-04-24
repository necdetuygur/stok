import { Injectable } from '@angular/core';
import { KAYIT_URL, GIRIS_URL, KULLANICI_URL } from '../api.constants';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class KullaniciService {
  constructor(private al: AlertService) {}
  Kullanici: any = JSON.parse(localStorage.getItem('Kullanici') || '{}');
  async Kayit(
    Ad: string,
    Soyad: string,
    Telefon: string,
    KullaniciAdi: string,
    Sifre: string
  ) {
    try {
      const f = await fetch(KAYIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Ad,
          Soyad,
          Telefon,
          KullaniciAdi,
          Sifre,
        }),
      });

      if (f.ok) {
        const data = await f.json();
        this.Kullanici = data;
        return data;
      } else {
        this.al.Fire('danger', 'Hata', await f.text());
      }
    } catch (error) {
      this.al.Fire('danger', 'Hata', JSON.stringify(error) || '');
    }
  }

  async Giris(KullaniciAdi: string, Sifre: string) {
    try {
      const f = await fetch(GIRIS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          KullaniciAdi,
          Sifre,
        }),
      });

      if (f.ok) {
        const data = await f.json();
        this.Kullanici = data;
        return data;
      } else {
        this.al.Fire('danger', 'Hata', await f.text());
      }
    } catch (error) {
      this.al.Fire('danger', 'Hata', JSON.stringify(error) || '');
    }
  }

  async Tum() {
    const Kullanici = JSON.parse(localStorage.getItem('Kullanici') || '{}');

    try {
      const f = await fetch(KULLANICI_URL, {
        headers: {
          Authorization: Kullanici.Token || '',
          'Content-Type': 'application/json',
        },
      });

      if (f.ok) {
        return await f.json();
      } else {
        this.al.Fire('danger', 'Hata', await f.text());
      }
    } catch (error) {
      this.al.Fire('danger', 'Hata', JSON.stringify(error) || '');
    }
  }

  async YoneticiYap(KullaniciAdi: any) {
    const Kullanici = JSON.parse(localStorage.getItem('Kullanici') || '{}');

    try {
      const f = await fetch(KULLANICI_URL + '/yonetici-yap/' + KullaniciAdi, {
        headers: {
          Authorization: Kullanici.Token || '',
          'Content-Type': 'application/json',
        },
      });

      if (f.ok) {
        return await f.json();
      } else {
        this.al.Fire('danger', 'Hata', await f.text());
      }
    } catch (error) {
      this.al.Fire('danger', 'Hata', JSON.stringify(error) || '');
    }
  }

  async KullaniciYap(KullaniciAdi: any) {
    const Kullanici = JSON.parse(localStorage.getItem('Kullanici') || '{}');
    try {
      const f = await fetch(KULLANICI_URL + '/kullanici-yap/' + KullaniciAdi, {
        headers: {
          Authorization: Kullanici.Token || '',
          'Content-Type': 'application/json',
        },
      });

      if (f.ok) {
        return await f.json();
      } else {
        this.al.Fire('danger', 'Hata', await f.text());
      }
    } catch (error) {
      this.al.Fire('danger', 'Hata', JSON.stringify(error) || '');
    }
  }
}
