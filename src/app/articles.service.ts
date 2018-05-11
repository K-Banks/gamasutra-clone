import { Injectable } from '@angular/core';
import { Article } from './model/article.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ArticlesService {
  articles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.articles = database.list('articles');
  }

  getArticles() {
    return this.articles;
  }

  getMainArticle() {
    return this.database.object('/articles/0');
  }

  addNewArticle(newArticle) {
    this.articles.push(newArticle);
  }
}
