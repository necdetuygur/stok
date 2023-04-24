import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { STOK_LOG_URL } from '../api.constants';

@Injectable({
  providedIn: 'root',
})
export class StokLogService {
  constructor(private al: AlertService) {}

  async Get(StokID: any) {
    try {
      const f = await fetch(STOK_LOG_URL + '/' + StokID);

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
