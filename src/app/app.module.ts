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
import { InputMaskModule } from '@ngneat/input-mask';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    StokComponent,
    ZamanPipe,
    KayitComponent,
    GirisComponent,
    HeaderComponent,
    KullaniciComponent,
    TestComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, InputMaskModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
