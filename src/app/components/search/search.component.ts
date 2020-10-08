
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/productsService';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  products: any[] = [];
  loading: boolean;
  mensajeError: string;


  constructor(private productservice: ProductsService) { }

  buscar(id: string) {
    this.loading = true;
    this.productservice.getProductsById(id).subscribe((productList: any) => {
      this.products = productList;
      this.loading = false;
    }, (errorServicio) => {
      this.loading = false;
      this.mensajeError = errorServicio.message;
    });
  };

  ngOnInit(): void {
  }
}
