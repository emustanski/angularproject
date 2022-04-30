import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdService } from 'src/app/core/ad.service';
import { IAd } from 'src/app/core/interfaces';


@Component({
  selector: 'app-allads',
  templateUrl: './allads.component.html',
  styleUrls: ['./allads.component.css']
})
export class AlladsComponent implements OnInit {
  p: number = 1;
  Ad: IAd[];
  hideWhenNoAd: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(public createAd: AdService, public toastr: ToastrService) { }

  ngOnInit() {
    this.dataState();
    let s = this.createAd.getAllAds();
    s.snapshotChanges().subscribe(data => {
      this.Ad = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$id'] = item.key; // here was the problem with /id
        this.Ad.push(a as IAd);
      });
    });
  }
  dataState() {
    this.createAd
      .getAllAds()
      .valueChanges()
      .subscribe(data => {
        this.preLoader = false;
        if (data.length <= 0) {
          this.hideWhenNoAd = false;
          this.noData = true;
        } else {
          this.hideWhenNoAd = true;
          this.noData = false;
        }
      });
  }
}
