import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
    console.log('Service listo');
  }

  getQuery(query: string) {
    const url = `http://localhost:8888${query}`;
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.get(url, { headers });
  }

  getProductsById(id?: string) {
    return this.getQuery(`/${id}`);
  }
}
