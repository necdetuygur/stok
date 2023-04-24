import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StokService } from 'src/app/services/stok.service';

@Component({
  selector: 'app-stok',
  templateUrl: './stok.component.html',
  styleUrls: ['./stok.component.css'],
})
export class StokComponent {
  list: any;
  filteredList: any;

  GrupAutoComp = [];
  GrupAutoCompValue = '';

  KodAutoComp = [];
  KodAutoCompValue = '';

  AdAutoComp = [];
  AdAutoCompValue = '';

  constructor(public stokService: StokService, private router: Router) {}
  async ngOnInit() {
    this.list = await this.stokService.Tum();
    this.filteredList = this.list;
    this.GrupAutoComp = await this.stokService.GetGrup();
    this.KodAutoComp = await this.stokService.GetKod();
    this.AdAutoComp = await this.stokService.GetAd();
  }
  GoStokGiris() {
    this.router.navigateByUrl('/stok-giris');
  }

  GrupAutoCompChanged(value: any) {
    this.GrupAutoCompValue = value || '';
    this.Filter();
  }

  KodAutoCompChanged(value: any) {
    this.KodAutoCompValue = value || '';
    this.Filter();
  }

  AdAutoCompChanged(value: any) {
    this.AdAutoCompValue = value || '';
    this.Filter();
  }

  Filter() {
    this.filteredList = this.list.filter(
      (x: any) =>
        x.Grup.toLocaleLowerCase().indexOf(
          this.GrupAutoCompValue.toLocaleLowerCase()
        ) > -1 &&
        x.Kod.toLocaleLowerCase().indexOf(
          this.KodAutoCompValue.toLocaleLowerCase()
        ) > -1 &&
        x.Ad.toLocaleLowerCase().indexOf(
          this.AdAutoCompValue.toLocaleLowerCase()
        ) > -1
    );
  }
}
