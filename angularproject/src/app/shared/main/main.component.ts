import { Component, Input, OnInit } from '@angular/core';
import { IAd } from '../../core/interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  @Input() ads: IAd[]

  constructor() {}

  ngOnInit(): void {
  }
}
