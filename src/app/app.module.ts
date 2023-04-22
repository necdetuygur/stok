import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StokComponent } from './components/stok/stok.component';
import { ZamanPipe } from './pipes/zaman.pipe';
import { KayitComponent } from './components/kayit/kayit.component';
import { GirisComponent } from './components/giris/giris.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { KullaniciComponent } from './components/kullanici/kullanici.component';

@NgModule({
  declarations: [
    AppComponent,
    StokComponent,
    ZamanPipe,
    KayitComponent,
    GirisComponent,
    HeaderComponent,
    KullaniciComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
