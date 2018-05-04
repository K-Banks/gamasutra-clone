import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { SiteNavComponent } from './site-nav/site-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBannerComponent,
    SiteNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
