import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
    console.log('Service listo');
  }

  getQuery(query?: string) {
    const url = `http://localhost:8888/products/${query?query:''}`;
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.get(url, { headers });
  }

  getProductsById(id?: string) {
    if(id===undefined || id===null || id===''){
      return this.getQuery();
    }else{
      return this.getQuery(`?id=${id}`);
    }
  }
}
