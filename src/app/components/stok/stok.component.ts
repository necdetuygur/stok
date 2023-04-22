import { Component } from '@angular/core';
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
    this.list = await this.stokService.Tum();
  }
  async Ekle() {
    const res = await this.stokService.Ekle(prompt('Ad', '') || '', 1, 'Adet');
    console.log(res);
    this.list = await this.stokService.Tum();
  }
}
