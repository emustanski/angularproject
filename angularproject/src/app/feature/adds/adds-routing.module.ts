import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/auth/guard/auth.guard";
import { AlladsComponent } from "./allads/allads.component";
import { CreateAdComponent } from "./create-ad/create-ad.component";
import { DetailsComponent } from "./details/details.component";
import { EditAdComponent } from "./edit-ad/edit-ad.component";


const routes: Routes = [
    { path: 'create-ad', component: CreateAdComponent, canActivate: [AuthGuard] },
    { path: 'allads', component: AlladsComponent },
    { path: 'allads/:id', component: DetailsComponent },
    { path: 'edit-ad/:id', component: EditAdComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AddsRoutingModule { }