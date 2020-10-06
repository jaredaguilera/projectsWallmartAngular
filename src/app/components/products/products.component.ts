import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { ProductsService } from 'src/app/services/productsService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any=[];
  mensajeError:string;
  p: number = 1;
  loading:boolean;

  constructor(private productsService : ProductsService) { 
    console.log('constructor');
  }

  ngOnInit(): void {
    let datosList:any[]=[];
    this.loading=true;
    this.productsService.getProducts().subscribe((data : any) =>{
      data.forEach(dato => {
        dato.priceLowered = dato.price * 0.5;
      });
      this.products = data;
      this.loading=false;
    },(errorServicio)=>{
      this.mensajeError=errorServicio.error.error.message;
      this.loading=false;
    });
  }



}
