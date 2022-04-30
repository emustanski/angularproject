import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './feature/pages/home/home.component';
import { NotFoundComponent } from './feature/pages/not-found/not-found.component';
import { AboutComponent } from './feature/pages/about/about.component';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () =>
    import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'feature/adds',
    loadChildren: () =>
    import('./feature/adds/adds.module').then((m) => m.AddsModule)
  },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    component: NotFoundComponent
}
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
