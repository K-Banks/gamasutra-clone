import { Component, OnInit } from '@angular/core';
import { Link } from './../model/link.model';

@Component({
  selector: 'app-topic-bar',
  templateUrl: './topic-bar.component.html',
  styleUrls: ['./topic-bar.component.css']
})
export class TopicBarComponent implements OnInit {

  links: Link[] = [
    new Link('All', '#'),
    new Link('CONSOLE/PC', '#'),
    new Link('SMARTPHONE/TABLET', '#'),
    new Link('INDEPENDENT', '#'),
    new Link('VR/AR', '#'),
    new Link('SOCIAL/ONLINE', '#'),
    new Link('GAME DEVELOPER ON GAMASUTRA', '#')
  ]

  constructor() { }

  ngOnInit() {
  }

}
