import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StokComponent } from './components/stok/stok.component';
import { ZamanPipe } from './pipes/zaman.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StokComponent,
    ZamanPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
