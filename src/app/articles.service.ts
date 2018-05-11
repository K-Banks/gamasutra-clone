import { Injectable } from '@angular/core';
import { Article } from './model/article.model';
import { AngularFireDatabase, FirebaseListObeservable } from 'angularfire2/database';

@Injectable()
export class ArticlesService {
  articles: FirebaseListObeservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.articles = database.list('articles');
  }

  getArticles() {
    return this.articles;
  }

  getMainArticle() {
    return this.database.object('/articles/0');
  }
}
