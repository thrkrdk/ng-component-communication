import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CekilisBaslaComponent} from './cekilis-basla/cekilis-basla.component';
import {CekilisSonucComponent} from './cekilis-sonuc/cekilis-sonuc.component';
import {CekilisSonucService} from './service/cekilis-sonuc.service';

@NgModule({
  declarations: [
    AppComponent,
    CekilisBaslaComponent,
    CekilisSonucComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CekilisSonucService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
