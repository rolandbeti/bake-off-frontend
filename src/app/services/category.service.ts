import { Product } from './../model/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

   rootPath: String = 'http://localhost:8081'
  constructor(private HttpClient: HttpClient ) { }

  getAllProducts(){
    return this.HttpClient.get(`${this.rootPath}`)
  }
  addProduct(product:Product){
    return this.HttpClient.post(`${this.rootPath}`,product)
  }

  deleteProduct(id: Number){
    return this.HttpClient.delete(`${this.rootPath}`)
  }


}
