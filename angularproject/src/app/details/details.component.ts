import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AlladsComponent } from '../allads/allads.component';
import { AdService } from '../core/ad.service';
import { AuthService } from '../core/auth.service';
import { IAd, IUser } from '../core/interfaces';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  ad: IAd
  constructor(
    public adService: AdService,
    public actRoute: ActivatedRoute,
    public toastr: ToastrService,    
    ) { }

  ngOnInit(): void {
    
        }
    deleteAd(ad) {
      if (window.confirm('Are sure you want to delete this ad ?')) { 
        this.adService.DeleteAd(ad.$id)
        this.toastr.success(ad.headline + ' successfully deleted!');
      }
    }
    
  }
