import { Injectable } from '@angular/core';
import { STOK_URL } from '../api.constants';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class StokService {
  constructor(private al: AlertService) {}
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
        this.al.Fire('danger', 'Hata', await f.text());
      }
    } catch (error) {
      this.al.Fire('danger', 'Hata', JSON.stringify(error) || '');
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
        this.al.Fire('danger', 'Hata', await f.text());
      }
    } catch (error) {
      this.al.Fire('danger', 'Hata', JSON.stringify(error) || '');
    }
  }

  async Tum() {
    try {
      const f = await fetch(STOK_URL);

      if (f.ok) {
        return await f.json();
      } else {
        this.al.Fire('danger', 'Hata', await f.text());
      }
    } catch (error) {
      this.al.Fire('danger', 'Hata', JSON.stringify(error) || '');
    }
  }

  async Get(StokID: any) {
    try {
      const f = await fetch(STOK_URL + '/' + StokID);

      if (f.ok) {
        return await f.json();
      } else {
        this.al.Fire('danger', 'Hata', await f.text());
      }
    } catch (error) {
      this.al.Fire('danger', 'Hata', JSON.stringify(error) || '');
    }
  }

  async GetBirim() {
    try {
      const f = await fetch(STOK_URL + '/birim');

      if (f.ok) {
        return await f.json();
      } else {
        this.al.Fire('danger', 'Hata', await f.text());
      }
    } catch (error) {
      this.al.Fire('danger', 'Hata', JSON.stringify(error) || '');
    }
  }

  async GetGrup() {
    try {
      const f = await fetch(STOK_URL + '/grup');

      if (f.ok) {
        return await f.json();
      } else {
        this.al.Fire('danger', 'Hata', await f.text());
      }
    } catch (error) {
      this.al.Fire('danger', 'Hata', JSON.stringify(error) || '');
    }
  }

  async GetKod() {
    try {
      const f = await fetch(STOK_URL + '/kod');

      if (f.ok) {
        return await f.json();
      } else {
        this.al.Fire('danger', 'Hata', await f.text());
      }
    } catch (error) {
      this.al.Fire('danger', 'Hata', JSON.stringify(error) || '');
    }
  }

  async GetAd() {
    try {
      const f = await fetch(STOK_URL + '/ad');

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
