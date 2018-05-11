import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../model/article.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private router: Router, private date: Date) { }

  ngOnInit() {
  }

}
