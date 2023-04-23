import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GirisComponent } from './components/giris/giris.component';
import { KayitComponent } from './components/kayit/kayit.component';
import { StokComponent } from './components/stok/stok.component';
import { KullaniciComponent } from './components/kullanici/kullanici.component';
import { StokDetayComponent } from './components/stok-detay/stok-detay.component';

const routes: Routes = [
  { path: '', component: GirisComponent },
  { path: 'kayit', component: KayitComponent },

  {
    path: 'stok',
    component: StokComponent,
  },
  {
    path: 'stok-detay/:StokID',
    component: StokDetayComponent,
  },
  {
    path: 'kullanici',
    component: KullaniciComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
