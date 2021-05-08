import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Product{
  name : string;
  price : string;
  cover_image : string;
  category: string;
  description : string;
}

@Injectable({
  providedIn: 'root'
})

export class ProductApiService {

  baseURL : string = "https://vcentry.herokuapp.com/api/";

  constructor(private http : HttpClient) { }

  listProduct(){
    const url : string = this.baseURL + "products";
    return this.http.get(url);
  }

  addProduct(product : Product){
    const url : string = this.baseURL + "product/add";
    return this.http.post(url, product);
  }

  editProduct(product : Product){
    const url : string = this.baseURL + "product/" + product.id +"/edit";
    return this.http.put(url, product);
  }

  deleteProduct(product : Product){
    const url : string = this.baseURL + "product/" + product.id +"/delete";
    return this.http.delete(url);
  }
}
