import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StokService } from 'src/app/services/stok.service';

@Component({
  selector: 'app-stok-detay',
  templateUrl: './stok-detay.component.html',
  styleUrls: ['./stok-detay.component.css'],
})
export class StokDetayComponent {
  StokID = '' + this.route.snapshot.paramMap.get('StokID');
  Stok: any = {};
  BirimAutoComp = [];
  GrupAutoComp = [];
  constructor(public stokService: StokService, private route: ActivatedRoute) {}
  async ngOnInit() {
    if (this.StokID != '0') {
      this.Stok = await this.stokService.Get(this.StokID);
    }
    this.BirimAutoComp = await this.stokService.GetBirim();
    this.GrupAutoComp = await this.stokService.GetGrup();
  }
  HasChange(e: any) {
    this.Stok[e.target.name] = '' + e.target.value || '';
  }
  async Kaydet() {
    if (this.StokID != '0') {
      console.log(
        await this.stokService.Guncelle(
          this.Stok.StokID,
          this.Stok.Kod,
          this.Stok.Grup,
          this.Stok.Ad,
          this.Stok.Miktar,
          this.Stok.Fiyat,
          this.Stok.Birim
        )
      );
    } else {
      console.log(
        await this.stokService.Ekle(
          this.Stok.Kod,
          this.Stok.Grup,
          this.Stok.Ad,
          this.Stok.Miktar,
          this.Stok.Fiyat,
          this.Stok.Birim
        )
      );
    }
  }

  BirimAutoCompSelected(value: any) {
    this.Stok['Birim'] = '' + value || '';
  }
  GrupAutoCompSelected(value: any) {
    this.Stok['Grup'] = '' + value || '';
  }
}
