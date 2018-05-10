import { Component, OnInit } from '@angular/core';
import { Link } from './../model/link.model';

@Component({
  selector: 'app-bottom-banner',
  templateUrl: './bottom-banner.component.html',
  styleUrls: ['./bottom-banner.component.css']
})
export class BottomBannerComponent implements OnInit {

  techLinks1: Link[] = [
    new Link('Black Hat', '#'),
    new Link('Content Marketing Institute', '#'),
    new Link('Content Marketing World', '#'),
    new Link('Dark Reading', '#'),
  ]

  techLinks2: Link[] = [
    new Link('Enterprise Connect', '#'),
    new Link('GDC', '#'),
    new Link('Gamasutra', '#'),
    new Link('HDI', '#'),
  ]

  techLinks3: Link[] = [
    new Link('ICMI', '#'),
    new Link('InformationWeek', '#'),
    new Link('INsecurity', '#'),
    new Link('Interop ITX', '#'),
  ]

  techLinks4: Link[] = [
    new Link('Network Computing', '#'),
    new Link('No Jitter', '#'),
    new Link('Service Management World', '#'),
    new Link('XRDC', '#'),
  ]

  communityLinks: Link[] = [
    new Link('Content Marketing', '#'),
    new Link('Enterprise IT', '#'),
    new Link('Enterprise Communications', '#'),
    new Link('Game Development', '#'),
    new Link('Information Security', '#'),
    new Link('IT Services & Support', '#'),
  ]

  workingLinks: Link[] = [
    new Link('Advertising Contracts', '#'),
    new Link('Event Calendar', '#'),
    new Link('Tech Marketing', '#'),
    new Link('Solutions', '#'),
    new Link('Contact Us', '#'),
    new Link('Licensing', '#'),
  ]

  legalLinks: Link[] = [
    new Link('Terms of Service', '#'),
    new Link('Privacy Statement', '#'),
    new Link('Legal Entities', '#'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
