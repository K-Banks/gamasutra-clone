import { Component } from '@angular/core';
import { Link } from './../model/link.model.ts';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.css']
})
export class TopBannerComponent {

  bannerLinkList: Link [] = [
    new Link('Gamasutra', 'http://www.gamasutra.com/'),
    new Link('GameCareerGuide', 'http://www.gamecareerguide.com/'),
    new Link('IndieGames', 'http://indiegames.com/index.html'),
    new Link('GDC Vault', 'http://www.gdcvault.com/'),
    new Link('GDC', 'http://www.gdconf.com/'),
    new Link('IGF', 'http://www.igf.com/')
  ];

}
