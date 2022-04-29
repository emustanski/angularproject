import { Component, OnInit } from '@angular/core';
import { AdService } from '../core/ad.service';
import { IAd } from '../core/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  latestAds: IAd[];

  constructor(public adService: AdService) {}

  ngOnInit(): void {
    this.adService
      .getAllAds()
      .valueChanges()
      .subscribe(result => {
        this.latestAds = [...result]
          .sort((a, b) => {
            return b.createdAt - a.createdAt;
          })
          .slice(0, 3);
      });
      // for(let ad of this.latestAds) {
      //   let firstAd = ad[0]
      // }
  }
}
