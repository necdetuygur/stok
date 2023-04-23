import { Injectable } from '@angular/core';
import { STOK_URL } from '../api.constants';

@Injectable({
  providedIn: 'root',
})
export class StokService {
  async Ekle(
    Kod: string,
    Grup: string,
    Ad: string,
    Miktar: number,
    Fiyat: string,
    Birim: string
  ) {
    const Kullanici = JSON.parse(localStorage.getItem('Kullanici') || '{}');
    try {
      const f = await fetch(STOK_URL, {
        method: 'POST',
        headers: {
          Authorization: Kullanici.Token || '',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Kod,
          Grup,
          Ad,
          Miktar,
          Fiyat,
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

  async Guncelle(
    StokID: any,
    Kod: string,
    Grup: string,
    Ad: string,
    Miktar: number,
    Fiyat: string,
    Birim: string
  ) {
    const Kullanici = JSON.parse(localStorage.getItem('Kullanici') || '{}');
    try {
      const f = await fetch(STOK_URL + '/' + StokID, {
        method: 'PUT',
        headers: {
          Authorization: Kullanici.Token || '',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Kod,
          Grup,
          Ad,
          Miktar,
          Fiyat,
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

  async Get(StokID: any) {
    return await (await fetch(STOK_URL + '/' + StokID)).json();
  }

  async GetBirim() {
    return await (await fetch(STOK_URL + '/birim')).json();
  }

  async GetGrup() {
    return await (await fetch(STOK_URL + '/grup')).json();
  }
}
