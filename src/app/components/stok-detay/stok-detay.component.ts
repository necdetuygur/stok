import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { StokLogService } from 'src/app/services/stok-log.service';
import { StokService } from 'src/app/services/stok.service';

@Component({
  selector: 'app-stok-detay',
  templateUrl: './stok-detay.component.html',
  styleUrls: ['./stok-detay.component.css'],
})
export class StokDetayComponent {
  StokID = '' + this.route.snapshot.paramMap.get('StokID');
  Stok: any = {};
  StokLog: any = [];
  BirimAutoComp = [];
  GrupAutoComp = [];
  constructor(
    public stokService: StokService,
    public stokLogService: StokLogService,
    private route: ActivatedRoute,
    public al: AlertService
  ) {}
  async ngOnInit() {
    if (this.StokID != '0') {
      this.Stok = await this.stokService.Get(this.StokID);
      this.StokLog = await this.stokLogService.Get(this.StokID);
    }
    this.BirimAutoComp = await this.stokService.GetBirim();
    this.GrupAutoComp = await this.stokService.GetGrup();
  }
  HasChange(e: any) {
    this.Stok[e.target.name] = '' + e.target.value || '';
  }
  async Kaydet() {
    if (this.StokID != '0') {
      const data = await this.stokService.Guncelle(
        this.Stok.StokID,
        this.Stok.Kod,
        this.Stok.Grup,
        this.Stok.Ad,
        this.Stok.Miktar,
        this.Stok.Fiyat,
        this.Stok.Birim
      );
      if (data.StokID) {
        this.al.Fire('success', 'Başarılı', 'Kaydedildi');
        this.StokLog = await this.stokLogService.Get(data.StokID);
      }
    } else {
      const data = await this.stokService.Ekle(
        this.Stok.Kod,
        this.Stok.Grup,
        this.Stok.Ad,
        this.Stok.Miktar,
        this.Stok.Fiyat,
        this.Stok.Birim
      );
      if (data.StokID) {
        this.al.Fire('success', 'Başarılı', 'Kaydedildi');
        this.StokLog = await this.stokLogService.Get(data.StokID);
      }
    }
  }

  BirimAutoCompChanged(value: any) {
    this.Stok['Birim'] = '' + value || '';
  }
  GrupAutoCompChanged(value: any) {
    this.Stok['Grup'] = '' + value || '';
  }
}
