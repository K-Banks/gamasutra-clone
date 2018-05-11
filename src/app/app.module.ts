import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
