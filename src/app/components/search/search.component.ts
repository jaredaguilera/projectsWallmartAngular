
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/productsService';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  products : any [] = [];
  loading:boolean;
  mensajeError:string;

  constructor(private productservice : ProductsService) {}

  buscar(id:string){
    if (id.length<=3) {

      this.productservice.getProductsById(id).subscribe((data:any)=>{
        data.forEach(dato => {
          dato.priceLowered = dato.price * 0.5;
        });
        this.products = data;
      },(errorServicio)=>{
        this.mensajeError=errorServicio.error.error.message;
      });

    }else{

      this.productservice.getProducts().subscribe((datas : any) =>{
        datas.forEach(dato => {
          dato.priceLowered = dato.price * 0.5;
        });
        let datosFiltrados = datas.filter(data => data.brand.includes(id) || data.description.includes(id));
        this.products = datosFiltrados;
      },(errorServicio)=>{
        this.mensajeError=errorServicio.error.error.message;
      });

    }
  };

  ngOnInit(): void {
  }
}
