import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdService } from '../core/ad.service';
import { IAd, IUser } from '../core/interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  adId?: string;
  ad: IAd;

  constructor(
    public adService: AdService,
    public actRoute: ActivatedRoute,
    public toastr: ToastrService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.adId = this.actRoute.snapshot.params["id"];
    this.adService.GetAd(this.adId).valueChanges().subscribe((res) => {
      this.ad = res;
    })
  }

  deleteAd(ad) {
    if (window.confirm('Are sure you want to delete this ad ?')) {

      this.adService.DeleteAd(this.adId );
      this.router.navigate(['/allads'])
      this.toastr.success(ad.headline + ' successfully deleted!');
    }
  }
}
