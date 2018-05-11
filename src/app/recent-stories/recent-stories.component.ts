import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './../articles.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-recent-stories',
  templateUrl: './recent-stories.component.html',
  styleUrls: ['./recent-stories.component.css'],
  providers: [ArticlesService]
})
export class RecentStoriesComponent implements OnInit {
  articles;
  single;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articlesService.getArticles().subscribe(dataLastEmittedFromObserver => {
      this.articles = dataLastEmittedFromObserver;
    });
    this.articles = this.articles.slice(1);
    this.single = this.articles[3];
  }

}
