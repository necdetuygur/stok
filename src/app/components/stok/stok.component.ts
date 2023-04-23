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
  constructor(public stokService: StokService, private router: Router) {}
  async ngOnInit() {
    this.list = await this.stokService.Tum();
  }
  GoStokGiris() {
    this.router.navigateByUrl('/stok-giris');
  }
}
