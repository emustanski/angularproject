import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdService } from '../../../core/ad.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-ad',
  templateUrl: './edit-ad.component.html',
  styleUrls: ['./edit-ad.component.css'],
})
export class EditAdComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private ad: AdService,
    private fb: FormBuilder,
    private loc: Location,
    private actRouter: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.updateAdData();
    const id = this.actRouter.snapshot.paramMap.get('id');
    this.ad
      .GetAd(id)
      .valueChanges()
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  get headline() {
    return this.editForm.get('headline');
  }

  get company() {
    return this.editForm.get('company');
  }

  get description() {
    return this.editForm.get('description');
  }

  get location() {
    return this.editForm.get('location');
  }

  updateAdData() {
    this.editForm = this.fb.group({
      headline: ['', [Validators.required, Validators.minLength(3)]],
      company: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      location: ['', [Validators.required, Validators.minLength(4)]],
      createdAt: '',
      authorEmail: ''
    });
  }

  goBack() {
    this.loc.back();
  }

  updateForm() {
    this.ad.UpdateAd(this.editForm.value);
    this.toastr.success(
      this.editForm.controls['headline'].value + ' updated successfully',
    );
    this.router.navigate(['allads']);
  }
}
