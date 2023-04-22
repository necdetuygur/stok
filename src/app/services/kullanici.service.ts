import { Injectable } from '@angular/core';
import { KAYIT_URL, GIRIS_URL } from '../api.constants';

@Injectable({
  providedIn: 'root',
})
export class KullaniciService {
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
    return data.token;
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
    return data.token;
  }
}
