import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { AlladsComponent } from './allads/allads.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { EditAdComponent } from './edit-ad/edit-ad.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
  { path: 'create-ad', component: CreateAdComponent, canActivate: [AuthGuard] },
  { path: 'allads', component: AlladsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'allads/:id', component: DetailsComponent },
  { path: 'edit-ad/:id', component: EditAdComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
];
@NgModule({
  imports: [CommonModule ,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
