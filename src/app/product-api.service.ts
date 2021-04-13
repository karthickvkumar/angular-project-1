import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  baseURL = "http://localhost:8080/api/";

  constructor(private http : HttpClient) { }

  listProduct(){
    const url = this.baseURL + "products";
    return this.http.get(url);
  }

  addProduct(product : any){
    const url = this.baseURL + "product/add";
    return this.http.post(url, product);
  }

  editProduct(product : any){
    const url = this.baseURL + "product/" + product.id +"/edit";
    return this.http.put(url, product);
  }

  deleteProduct(product : any){
    const url = this.baseURL + "product/" + product.id +"/delete";
    return this.http.delete(url);
  }
}
