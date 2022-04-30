import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';

@NgModule({
    declarations: [
        HomeComponent,
        NotFoundComponent,
        AboutComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ]
})
export class PagesModule {}