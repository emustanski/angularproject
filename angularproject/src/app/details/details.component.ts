import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdService } from '../core/ad.service';
import { AuthService } from '../core/auth.service';
import { IAd} from '../core/interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  adId?: string;
  authorEmail: string;
  ad: IAd;

  constructor(
    public adService: AdService,
    public actRoute: ActivatedRoute,
    public toastr: ToastrService,
    public router: Router,
    public authService: AuthService
  ) {}
  
  ngOnInit(): void {
    this.adId = this.actRoute.snapshot.params["id"];
    this.adService.GetAd(this.adId).valueChanges().subscribe((res) => {
      this.ad = res;
      this.authorEmail = res.authorEmail;
    })
    
  }

  isAuthor(): boolean {
    if(this.authService.userEmail == this.authorEmail) {
      return true;
    } else {
      return false;
      }
      
  }
  

  deleteAd(ad) {
    if (window.confirm('Are sure you want to delete this ad ?')) {

      this.adService.DeleteAd(this.adId );
      this.router.navigate(['/allads'])
      this.toastr.success(ad.headline + ' successfully deleted!');
    }
  }
}
