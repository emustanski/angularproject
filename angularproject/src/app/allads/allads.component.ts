import { Component, OnInit } from '@angular/core';
import { AdService } from '../core/ad.service';
import { IAd } from '../core/interfaces';
import { ToastrService } from 'ngx-toastr';




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
  
  constructor(
    public createAd: AdService,
    public toastr: ToastrService
    ){ }
    
  ngOnInit() {
    this.dataState();
    let s = this.createAd.getAllAds(); 
    s.snapshotChanges().subscribe(data => {
      this.Ad = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['_id'] = item.key; // here was the problem with /id
        this.Ad.push(a as IAd);
      })
    })
  }
  dataState() {     
    this.createAd.getAllAds().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoAd = false;
        this.noData = true;
      } else {
        this.hideWhenNoAd = true;
        this.noData = false;
      }
    })
  }
  deleteAd(ad) {
    if (window.confirm('Are sure you want to delete this ad ?')) { 
      this.createAd.DeleteAd(ad.$id)
      this.toastr.success(ad.headline + ' successfully deleted!');
    }
  }
}
