import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { ProductsService } from 'src/app/services/productsService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = [];
  mensajeError: string;
  p: number = 1;
  loading: boolean;

  constructor(private productsService: ProductsService) {
    console.log('constructor');
  }

  ngOnInit(): void {
    this.loading = true;
    this.productsService.getProductsById().subscribe((productList: any) => {
      this.products = productList;
      this.loading = false;
    }, (errorServicio) => {
      this.mensajeError = errorServicio.message;
      this.loading = false;
    });
  }



}
