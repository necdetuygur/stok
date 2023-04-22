import { Injectable } from '@angular/core';
import { KAYIT_URL, GIRIS_URL, KULLANICI_URL } from '../api.constants';

@Injectable({
  providedIn: 'root',
})
export class KullaniciService {
  Kullanici: any = JSON.parse(localStorage.getItem('Kullanici') || '{}');
  async Kayit(
    Ad: string,
    Soyad: string,
    Telefon: string,
    KullaniciAdi: string,
    Sifre: string
  ) {
    const data = await (
      await fetch(KAYIT_URL, {
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
      })
    ).json();
    this.Kullanici = data;
    return data;
  }

  async Giris(KullaniciAdi: string, Sifre: string) {
    const data = await (
      await fetch(GIRIS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          KullaniciAdi,
          Sifre,
        }),
      })
    ).json();
    this.Kullanici = data;
    return data;
  }

  async Tum() {
    const Kullanici = JSON.parse(localStorage.getItem('Kullanici') || '{}');
    return await (
      await fetch(KULLANICI_URL, {
        headers: {
          Authorization: Kullanici.Token || '',
          'Content-Type': 'application/json',
        },
      })
    ).json();
  }

  async YoneticiYap(KullaniciAdi: any) {
    const Kullanici = JSON.parse(localStorage.getItem('Kullanici') || '{}');
    return await await fetch(KULLANICI_URL + '/yonetici-yap/' + KullaniciAdi, {
      headers: {
        Authorization: Kullanici.Token || '',
        'Content-Type': 'application/json',
      },
    });
  }

  async KullaniciYap(KullaniciAdi: any) {
    const Kullanici = JSON.parse(localStorage.getItem('Kullanici') || '{}');
    return await await fetch(KULLANICI_URL + '/kullanici-yap/' + KullaniciAdi, {
      headers: {
        Authorization: Kullanici.Token || '',
        'Content-Type': 'application/json',
      },
    });
  }
}
