import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MajorStoriesComponent } from '../major-stories/major-stories.component';
import { RightBarComponent } from '../right-bar/right-bar.component';
import { RecentStoriesComponent } from '../recent-stories/recent-stories.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
