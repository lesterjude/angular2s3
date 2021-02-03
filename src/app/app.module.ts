import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdsenseModule } from 'ng2-adsense';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdsenseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
