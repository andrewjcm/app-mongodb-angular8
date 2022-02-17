import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  uri = 'http://localhost:4000/products';

  constructor(private http: HttpClient) { }

  addProduct(ProductName: string, ProductDescription: string, ProductPrice: number) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };

    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
    .subscribe(res => console.log('Done'));
  }

  getProducts() {
    return this.http.get(`${this.uri}`)
  }

  editProduct(id: any) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateProduct(ProductName: string, ProductDescription: string, ProductPrice: number, id: any) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };

    console.log(obj);
    this.http.post(`${this.uri}/update/${id}`, obj)
    .subscribe(res => console.log('Done'));
  }

  deleteProduct(id: string) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
