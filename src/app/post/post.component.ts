import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../model/article.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitNewArticle(title, author, image, paragraphs) {
    let date = new Date;
    let currentTime = date.getHours() + ":" + date.getMinutes();
    console.log(currentTime);
    let currentDate = (date.getMonth() + 1) + "/" + date.getUTCDate() + "/" +
     date.getUTCFullYear();
    console.log(currentDate);
    let newArticle: Article = new Article(title, author, currentDate, currentTime, image, paragraphs);
    console.log(newArticle);
  }
}
