import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-major-stories',
  templateUrl: './major-stories.component.html',
  styleUrls: ['./major-stories.component.css'],
  providers: [ArticlesService]
})
export class MajorStoriesComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;
  mainArticle: FirebaseListObservable<any[]>;
  articlesToList;

  constructor(private articlesService: ArticlesService) {
    this.articlesService.getMainArticle().subscribe(dataLastEmittedFromObserver => {
      this.mainArticle = dataLastEmittedFromObserver;
    });
    this.articlesService.getArticles().subscribe(dataLastEmittedFromObserver => {
      this.articles = dataLastEmittedFromObserver;
      this.articlesToList = this.articles.slice(1);
    });
  }

  ngOnInit() {  }

}
