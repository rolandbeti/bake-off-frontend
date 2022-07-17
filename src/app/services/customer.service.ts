import { Customer } from './../model/customer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  rootPath: string = 'http://localhost:8081';
  constructor(private httpClient: HttpClient) {}

  getAllCustomers() {
    return this.httpClient.get(`${this.rootPath}/api/customers`);
  }

  addProduct(product: Customer) {
    return this.httpClient.post(`${this.rootPath}/api/products`, product);
  }

  deleteProduct(id: Number) {
    return this.httpClient.delete(`${this.rootPath}/api/products/${id}`);
  }

}
