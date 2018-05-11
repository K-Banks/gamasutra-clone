import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys.ts';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { SiteNavComponent } from './site-nav/site-nav.component';
import { TopicBarComponent } from './topic-bar/topic-bar.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { MajorStoriesComponent } from './major-stories/major-stories.component';
import { RecentStoriesComponent } from './recent-stories/recent-stories.component';
import { RightBarComponent } from './right-bar/right-bar.component';
import { BottomBannerComponent } from './bottom-banner/bottom-banner.component';
import { ContentPanelComponent } from './content-panel/content-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBannerComponent,
    SiteNavComponent,
    TopicBarComponent,
    LeftBarComponent,
    MajorStoriesComponent,
    RecentStoriesComponent,
    RightBarComponent,
    BottomBannerComponent,
    ContentPanelComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}
