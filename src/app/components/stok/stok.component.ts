import { Component } from '@angular/core';
import { Stok } from 'src/app/models/stok.model';
import { StokService } from 'src/app/services/stok.service';

@Component({
  selector: 'app-stok',
  templateUrl: './stok.component.html',
  styleUrls: ['./stok.component.css'],
})
export class StokComponent {
  constructor(public stokService: StokService) {}
  async Add() {
    const data: Stok = {
      KullaniciID: 1,
      Ad: 'Armut',
      Miktar: -10,
      Birim: 'Adet',
      Zaman: new Date(),
    };
    const res = await this.stokService.Add(data);
    console.log(res);
  }
}
