import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent{

  @Input() items: any[]=[];
  p: number = 1;
  constructor() { }


}
