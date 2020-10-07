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
    const url = `https://api-wallmart-products.herokuapp.com/${query}`;
    return this.http.get(url);
  }

  getProducts(){
    return this.getQuery(`products/getproducts`);
  }

  getProductsById(id: string) {
    console.log(id);
    return this.getQuery(`products/getproductsbyid/${id}`);
  }

  getproductsbybrand(brand: string) {
    return this.getQuery(`getproductsbybrand/${brand}`);
  }
}
