import { Component, OnInit } from '@angular/core';
import { ContentSideBar } from '../model/ContentSideBar.model';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // let latestJobs: ContentSideBar = new ContentSideBar(
  //   "Latest Jobs",
  //   "https://twimgs.com/gamasutra/images/icon_jobs.png",
  //   ["Stardock Systems, Inc", "Gear Inc.", "Sucker Punch Productions", "Sucker Punch Productions", "Skydance Interactive", "Skydance Interactive"],
  //   ["Associate Art Producer", "[Vietnam] Game Designer", "Outsource Artist", "Senior Environment Artist", "Software Engineer", "Gameplay Engineer"],
  //   ["#", "#", "#", "#", "#", "#"]
  // );

}
