import { Component } from '@angular/core';
import { Stok } from 'src/app/models/stok.model';
import { StokService } from 'src/app/services/stok.service';

@Component({
  selector: 'app-stok',
  templateUrl: './stok.component.html',
  styleUrls: ['./stok.component.css'],
})
export class StokComponent {
  list: any;
  constructor(public stokService: StokService) {}
  async ngOnInit() {
    this.list = await this.stokService.All();
  }
  async Add() {
    const data: Stok = {
      KullaniciID: 1,
      Ad: prompt('Ad', '') || '',
      Miktar: 1,
      Birim: 'Adet',
      Zaman: new Date(),
    };
    const res = await this.stokService.Add(data);
    console.log(res);
    //
    this.list = await this.stokService.All();
  }
}
