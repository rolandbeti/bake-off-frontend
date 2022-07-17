import { Customer } from './../model/customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  rootPath: string = 'http://localhost:8081';
  constructor(private httpClient: HttpClient) {}

  getAllCustomers() {
    return this.httpClient.get(`${this.rootPath}/api/customers`);
  }

  addCustomer(customer: Customer) {
    return this.httpClient.post(`${this.rootPath}/api/customers`, customer);
  }

  deleteCustomer(id: Number) {
    return this.httpClient.delete(`${this.rootPath}/api/customers/${id}`);
  }
}
