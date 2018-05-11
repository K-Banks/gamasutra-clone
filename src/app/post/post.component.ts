import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../model/article.model';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [ArticlesService]
})
export class PostComponent {

  constructor(private router: Router, private articlesService: ArticlesService) { }

  submitNewArticle(title, author, image, paragraphs) {
    let newDate = new Date;
    let date = (newDate.getMonth() + 1) + "/" + newDate.getUTCDate() + "/" +
     newDate.getUTCFullYear();
    debugger
    var newArticle: Article = new Article();
    newArticle.title = title;
    newArticle.author = author;
    newArticle.image = image;
    newArticle.date = date;
    newArticle.paragraphs = paragraphs;
    console.log("TESTING NEW ARTICLE" + newArticle)
    this.articlesService.addNewArticle(newArticle);
  }
}
