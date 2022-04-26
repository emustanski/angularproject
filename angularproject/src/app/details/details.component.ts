import { Component, Input, OnInit } from '@angular/core';
import { IAd } from '../core/interfaces';
import { EditAdComponent } from '../edit-ad/edit-ad.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() ad: IAd
  constructor() { }

  ngOnInit(): void {
  }

}
