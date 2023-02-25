import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {

  private productsUrl = '/api/products';

  constructor(private http: HttpClient) { }

  // Get the status
  getProducts() {
    return this.http.get(this.productsUrl);
  }
}
