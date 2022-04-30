import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlladsComponent } from './allads/allads.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { AddItemComponent } from './add-item/add-item.component';
import { DetailsComponent } from 'src/app/feature/adds/details/details.component';
import { EditAdComponent } from './edit-ad/edit-ad.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddsRoutingModule } from './adds-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';






@NgModule({
  declarations: [
    AlladsComponent,
    CreateAdComponent,
    AddItemComponent,
    DetailsComponent,
    EditAdComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AddsRoutingModule,
    NgxPaginationModule,
  ], exports: [

  ]
})
export class AddsModule { }