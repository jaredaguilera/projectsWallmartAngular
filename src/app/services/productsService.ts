import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
    console.log('Service listo');
  }

  getQuery(query: string) {
    const url = `http://localhost:8888/products/${query}`;
    return this.http.get(url);
  }

  getProducts(){
    return this.getQuery(`/getproducts`);
  }

  getProductsById(id: string) {
    console.log(id);
    return this.getQuery(`getproductsbyid/${id}`);
  }

  getproductsbybrand(brand: string) {
    return this.getQuery(`getproductsbybrand/${brand}`);
  }
}
