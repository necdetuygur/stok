import { Injectable } from '@angular/core';
import { Stok } from '../models/stok.model';
import { stokUrl } from '../api.constants';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class StokService {
  constructor() {}
  async Add(data: Stok) {
    return await (
      await axios.post(stokUrl, data)
    ).data;
  }
  async All() {
    return await (
      await axios.get(stokUrl)
    ).data;
  }
}
