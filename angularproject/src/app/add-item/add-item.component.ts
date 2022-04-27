import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { IAd } from '../core/interfaces';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @Input() ad: IAd 
  constructor(public route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.snapshot.paramMap.get('id');
  }

}
