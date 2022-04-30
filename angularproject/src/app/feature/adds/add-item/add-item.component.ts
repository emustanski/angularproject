import { Component, Input, OnInit } from '@angular/core';
import { IAd } from 'src/app/core/interfaces';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  @Input() ad: IAd;
  constructor() {}
  ngOnInit(): void {}
}
