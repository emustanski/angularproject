import { Component, OnInit } from '@angular/core';
import { AdService } from 'src/app/core/ad.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'create-ad-item',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css'],
})
export class CreateAdComponent implements OnInit {
  public adForm: FormGroup;

  constructor(
    public createAd: AdService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    public router: Router
  ) {}

  ngOnInit() {
    this.createAd.getAllAds();
    this.createAdForm();
  }

  createAdForm() {
    this.adForm = this.fb.group({
      headline: ['', [Validators.required, Validators.minLength(5)]],
      company: ['', [Validators.required, Validators.minLength(3)]],
      location: ['', [Validators.required, Validators.minLength(8)]],
      description: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  get headline() {
    return this.adForm.get('headline');
  }

  get company() {
    return this.adForm.get('company');
  }

  get description() {
    return this.adForm.get('description');
  }

  get location() {
    return this.adForm.get('location');
  }

  ResetForm() {
    this.adForm.reset();
  }

  submitAdData() {
    this.createAd.CreateAd(this.adForm.value);
    this.toastr.success(
      this.adForm.controls['headline'].value + ' successfully added!',
    );
    this.router.navigate(["/allads"])
  }
}
