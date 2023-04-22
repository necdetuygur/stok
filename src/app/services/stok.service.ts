import { Injectable } from '@angular/core';
import { STOK_URL } from '../api.constants';

@Injectable({
  providedIn: 'root',
})
export class StokService {
  async Ekle(Ad: string, Miktar: number, Birim: string) {
    const Kullanici = JSON.parse(localStorage.getItem('Kullanici') || '{}');
    try {
      const f = await fetch(STOK_URL, {
        method: 'POST',
        headers: {
          Authorization: Kullanici.Token || '',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Ad,
          Miktar,
          Birim,
        }),
      });
      if (f.ok) {
        return await f.json();
      } else {
        alert(await f.text());
      }
    } catch (error) {
      alert(error);
    }
  }
  async Tum() {
    return await (await fetch(STOK_URL)).json();
  }
}
