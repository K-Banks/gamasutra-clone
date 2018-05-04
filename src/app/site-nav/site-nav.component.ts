import { Component } from '@angular/core';
import { Link } from './../model/link.model';

@Component({
  selector: 'app-site-nav',
  templateUrl: './site-nav.component.html',
  styleUrls: ['./site-nav.component.css']
})
export class SiteNavComponent {

  navLinkList: Link [] = [
    new Link('UPDATES', '#'),
    new Link('BLOGS', '#'),
    new Link('CONTRACTORS', '#'),
    new Link('NEWSLETTER', '#'),
    new Link('STORE', '#'),
  ];

}
